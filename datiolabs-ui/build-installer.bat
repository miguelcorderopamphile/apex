@echo off
REM DatioLabs Retail - Build Installer (Batch wrapper)
REM Ejecuta: build-installer.bat [clean] [skip-frontend] [version]

set VERSION=1.0.0
set CLEAN=0
set SKIP_FRONTEND=0

for %%a in (%*) do (
    if /i "%%a"=="clean" set CLEAN=1
    if /i "%%a"=="skip-frontend" set SKIP_FRONTEND=1
    if /i "%%a"=="help" goto :HELP
    if "%%~a"=="/v:*" set VERSION=%%~a
    if "%%~a"=="-v:*" set VERSION=%%~a
)

echo ========================================
echo   DatioLabs Retail - Build Installer
echo   Version: %VERSION%
echo ========================================
echo.

REM Check Rust
where rustc >nul 2>&1
if errorlevel 1 (
    echo ERROR: Rust no encontrado. Instale desde https://rustup.rs/
    exit /b 1
)
echo [OK] Rust encontrado

REM Check Cargo
where cargo >nul 2>&1
if errorlevel 1 (
    echo ERROR: Cargo no encontrado
    exit /b 1
)
echo [OK] Cargo encontrado

REM Check Node / Frontend dist
if exist "..\ui\dist\index.html" (
    echo [OK] Frontend precompilado encontrado en ui/dist (No requiere Node ni Vite)
    set SKIP_FRONTEND=1
) else (
    where node >nul 2>&1
    if errorlevel 1 (
        echo ERROR: Node.js no encontrado y no existe ui/dist. Instale desde https://nodejs.org/
        exit /b 1
    )
)

echo.

REM Generate icons if ImageMagick available
where magick >nul 2>&1
if not errorlevel 1 (
    echo Generando iconos...
    magick icons/icon.png -define icon:auto-resize=256,128,64,48,32,16 icons/icon.ico
    magick icons/icon.png -resize 150x57! icons/header.bmp
    magick icons/icon.png -resize 498x312! icons/welcome.bmp
    echo [OK] Iconos generados
) else (
    echo [WARN] ImageMagick no encontrado - use iconos pregenerados
)
echo.

REM Build frontend
if %SKIP_FRONTEND%==0 (
    echo Building frontend...
    cd /d "..\ui"
    if not exist node_modules (
        echo Instalando dependencias...
        npm ci
    )
    npm run build
    if not exist dist (
        echo ERROR: Build del frontend fallo
        exit /b 1
    )
    echo [OK] Frontend build completado
    cd /d "..\datiolabs-ui"
) else (
    echo Saltando build del frontend
)
echo.

REM Build Backend
echo Compilando ejecutable de Windows...
if %CLEAN%==1 (
    echo Limpiando builds anteriores...
    cargo clean
)
cargo build --release --bin datiolabs-ui
if errorlevel 1 (
    echo ERROR: Compilacion del backend fallo
    exit /b 1
)

REM Preparar directorio app para NSIS
echo Empaquetando archivos de distribucion...
if exist "app" rmdir /s /q "app"
mkdir "app"
copy /y "..\target\release\datiolabs-ui.exe" "app\DatioLabs.exe" >nul
if not exist "app\DatioLabs.exe" (
    echo ERROR: DatioLabs.exe no encontrado en target\release
    exit /b 1
)

REM Ejecutar compilador NSIS
echo Generando instalador ejecutable con NSIS...
where makensis >nul 2>&1
if not errorlevel 1 (
    makensis installer.nsi
) else if exist "C:\Program Files (x86)\NSIS\makensis.exe" (
    "C:\Program Files (x86)\NSIS\makensis.exe" installer.nsi
) else if exist "C:\Program Files\NSIS\makensis.exe" (
    "C:\Program Files\NSIS\makensis.exe" installer.nsi
) else (
    echo ERROR: makensis.exe no encontrado para empaquetar
    exit /b 1
)

set INSTALLER=DatioLabs_Retail_%VERSION%_x64-setup.exe
if not exist "%INSTALLER%" (
    echo ERROR: Instalador no generado
    exit /b 1
)

echo.
echo ========================================
echo  BUILD COMPLETADO EXITOSAMENTE
echo  Instalador: %INSTALLER%
echo ========================================
exit /b 0

:HELP
echo Uso: build-installer.bat [clean] [skip-frontend] [/v:version]
echo.
echo   clean          - Ejecuta cargo clean antes de compilar
echo   skip-frontend  - Salta el build del frontend (usa dist existente)
echo   /v:X.Y.Z       - Establece la version (default: 0.1.0)
echo.
echo Ejemplos:
echo   build-installer.bat
echo   build-installer.bat clean
echo   build-installer.bat /v:1.0.0
echo   build-installer.bat clean skip-frontend /v:1.0.0