; DatioLabs Retail - Minimal NSIS Installer
; Compile with: makensis installer.nsi

!define PRODUCT_NAME "DatioLabs Retail"
!define PRODUCT_VERSION "0.1.0"
!define PRODUCT_PUBLISHER "DatioLabs"
!define PRODUCT_WEB_SITE "https://datiolabs.com"
!define PRODUCT_DIR_REGKEY "Software\Microsoft\Windows\CurrentVersion\App Paths\DatioLabs.exe"
!define PRODUCT_UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\DatioLabs"
!define PRODUCT_UNINST_ROOT_KEY "HKCU"
!define OUT_FILE "DatioLabs_Retail_${PRODUCT_VERSION}_x64-setup.exe"

OutFile "${OUT_FILE}"

!include "MUI2.nsh"
!include "FileFunc.nsh"
!include "LogicLib.nsh"

; Modern UI settings - minimal pages
!define MUI_ICON "icons\icon.ico"
!define MUI_UNICON "icons\icon.ico"
!define MUI_HEADERIMAGE
!define MUI_HEADERIMAGE_BITMAP "icons\header.bmp"
!define MUI_WELCOMEFINISHPAGE_BITMAP "icons\welcome.bmp"
!define MUI_UNWELCOMEFINISHPAGE_BITMAP "icons\welcome.bmp"
!define MUI_WELCOMEPAGE
!define MUI_DIRECTORYPAGE
!define MUI_INSTFILESPAGE
!define MUI_FINISHPAGE
!define MUI_UNWELCOMEPAGE
!define MUI_UNCONFIRMPAGE
!define MUI_UNINSTFILESPAGE
!define MUI_UNFINISHPAGE

; Skip license page for speed
; !define MUI_LICENSEPAGE

; No language selector
!define MUI_LANGDLL_REGISTRY_ROOT "HKCU"
!define MUI_LANGDLL_REGISTRY_KEY "Software\DatioLabs"
!define MUI_LANGDLL_REGISTRY_VALUENAME "Installer Language"

; Default install directory
InstallDir "$LOCALAPPDATA\DatioLabs"
InstallDirRegKey HKCU "${PRODUCT_DIR_REGKEY}" ""

; Request admin if needed for per-machine, but we use per-user
RequestExecutionLevel user

; Compression
SetCompressor lzma
SetCompressorDictSize 32
SetDatablockOptimize on

; Modern UI
!insertmacro MUI_PAGE_WELCOME

; Página de selección de instalación: Sin respaldo (Nuevo) o Con respaldo
Page custom SeleccionModoPage ValidarSeleccionModoPage

!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!define MUI_FINISHPAGE_RUN "$INSTDIR\DatioLabs.exe"
!define MUI_FINISHPAGE_RUN_NOTCHECKED
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_WELCOME
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_UNPAGE_FINISH

!insertmacro MUI_LANGUAGE "Spanish"

; Variables
Var ModoDialog
Var RadioNuevo
Var RadioRespaldo
Var ModoInstalacion

Function SeleccionModoPage
  !insertmacro MUI_HEADER_TEXT "Modalidad de Instalación" "Seleccione si iniciará un negocio nuevo o restaurará desde un respaldo."
  nsDialogs::Create 1018
  Pop $ModoDialog
  ${If} $ModoDialog == error
    Abort
  ${EndIf}

  ${NSD_CreateLabel} 0 0 100% 20u "¿Cómo desea configurar este terminal de punto de venta?"
  Pop $0

  ${NSD_CreateRadioButton} 10u 28u 90% 16u "Instalación Limpia (Nuevo Negocio - Sin Respaldo)"
  Pop $RadioNuevo
  ${NSD_Check} $RadioNuevo

  ${NSD_CreateRadioButton} 10u 52u 90% 16u "Instalación con Respaldo Criptográfico Existente (.datio)"
  Pop $RadioRespaldo

  ${NSD_CreateLabel} 10u 76u 90% 30u "Nota: Al abrir el sistema por primera vez, el asistente le solicitará el nombre de su negocio o la carga del archivo de respaldo seleccionado."
  Pop $0

  nsDialogs::Show
FunctionEnd

Function ValidarSeleccionModoPage
  ${NSD_GetState} $RadioRespaldo $0
  ${If} $0 == ${BST_CHECKED}
    StrCpy $ModoInstalacion "CON_RESPALDO"
  ${Else}
    StrCpy $ModoInstalacion "SIN_RESPALDO"
  ${EndIf}

  WriteRegStr HKCU "Software\DatioLabs" "ModoInstalacion" "$ModoInstalacion"
FunctionEnd

Section "MainSection" SEC01
  SetOutPath "$INSTDIR"
  
  ; Main executable and dependencies
  File /r "app\*"
  
  ; Create uninstaller
  WriteUninstaller "$INSTDIR\uninstall.exe"
  
  ; Registry for uninstall
  WriteRegStr HKCU "${PRODUCT_UNINST_KEY}" "DisplayName" "${PRODUCT_NAME}"
  WriteRegStr HKCU "${PRODUCT_UNINST_KEY}" "UninstallString" "$INSTDIR\uninstall.exe"
  WriteRegStr HKCU "${PRODUCT_UNINST_KEY}" "DisplayVersion" "${PRODUCT_VERSION}"
  WriteRegStr HKCU "${PRODUCT_UNINST_KEY}" "Publisher" "${PRODUCT_PUBLISHER}"
  WriteRegStr HKCU "${PRODUCT_UNINST_KEY}" "URLInfoAbout" "${PRODUCT_WEB_SITE}"
  WriteRegStr HKCU "${PRODUCT_UNINST_KEY}" "InstallLocation" "$INSTDIR"
  
  ; App Paths for "Start -> Run -> DatioLabs"
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\App Paths\DatioLabs.exe" "" "$INSTDIR\DatioLabs.exe"
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\App Paths\DatioLabs.exe" "Path" "$INSTDIR"
  
  ; Start Menu shortcuts
  CreateDirectory "$SMPROGRAMS\DatioLabs"
  CreateShortcut "$SMPROGRAMS\DatioLabs\DatioLabs Retail.lnk" "$INSTDIR\DatioLabs.exe"
  CreateShortcut "$SMPROGRAMS\DatioLabs\Desinstalar.lnk" "$INSTDIR\uninstall.exe"
  
  ; Desktop shortcut
  CreateShortcut "$DESKTOP\DatioLabs Retail.lnk" "$INSTDIR\DatioLabs.exe"
SectionEnd

Section -Post
  WriteUninstaller "$INSTDIR\uninstall.exe"
SectionEnd

Function .onInit
  ; Initialization
FunctionEnd

Function un.onInit
  ; Check if app is running
  FindWindow $0 "DatioLabs Retail"
  ${If} $0 != 0
    MessageBox MB_ICONEXCLAMATION|MB_OK "Cierre DatioLabs Retail antes de desinstalar."
    Abort
  ${EndIf}
FunctionEnd

Function un.onUninstSuccess
  HideWindow
  MessageBox MB_ICONINFORMATION|MB_OK "DatioLabs Retail ha sido desinstalado correctamente."
FunctionEnd

Section Uninstall
  ; 1. Detener procesos huérfanos o en ejecución
  nsExec::Exec 'taskkill /F /IM DatioLabs.exe'

  ; 2. Preguntar al usuario si desea eliminar también la base de datos y configuraciones
  MessageBox MB_YESNO|MB_ICONQUESTION "¿Desea eliminar también la base de datos local y todos los datos del negocio?$\n$\nSeleccione 'Sí' para una desinstalación 100% limpia y completa.$\nSeleccione 'No' si desea conservar sus datos para una futura reinstalación." IDNO ConservarDatos

  ; Purgar datos de usuario, base de datos Sled, cachés y WebView2
  RMDir /r "$LOCALAPPDATA\DatioLabs"
  RMDir /r "$APPDATA\com.datiolabs.retail"
  RMDir /r "$LOCALAPPDATA\com.datiolabs.retail"
  RMDir /r "$LOCALAPPDATA\datiolabs_db"

ConservarDatos:
  ; 3. Eliminar archivos de la aplicación
  RMDir /r "$INSTDIR"
  
  ; 4. Eliminar accesos directos
  Delete "$DESKTOP\DatioLabs Retail.lnk"
  RMDir /r "$SMPROGRAMS\DatioLabs"
  
  ; 5. Eliminar entradas del registro de Windows
  DeleteRegKey HKCU "${PRODUCT_UNINST_KEY}"
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\App Paths\DatioLabs.exe"
  DeleteRegKey HKCU "Software\DatioLabs"
SectionEnd

; Fast installation - no unnecessary operations
Function .onInstSuccess
  ; Silent success
FunctionEnd