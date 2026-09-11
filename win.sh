#!/usr/bin/env bash
set -e

KEY="/home/ec2-user/apex/gate.pem"
HOST="Administrator@3.113.213.109"

if [ "$1" == "sync" ]; then
    echo "[*] Empaquetando /home/ec2-user/apex..."
    tar -czf /tmp/apex_sync.tar.gz --exclude='./target' --exclude='./ui/node_modules' -C /home/ec2-user/apex .
    echo "[*] Transfiriendo via SCP..."
    scp -i "$KEY" -o StrictHostKeyChecking=no /tmp/apex_sync.tar.gz "$HOST:apex.tar.gz"
    echo "[*] Extrayendo en C:/apex..."
    ssh -i "$KEY" -o StrictHostKeyChecking=no "$HOST" "powershell -Command \"New-Item -ItemType Directory -Force -Path C:\apex | Out-Null; tar -xzf apex.tar.gz -C C:\apex; Remove-Item -Force apex.tar.gz\""
    rm -f /tmp/apex_sync.tar.gz
    echo "[OK] Sincronizacion completada con exito."
elif [ -n "$1" ]; then
    ssh -i "$KEY" -o StrictHostKeyChecking=no "$HOST" "$@"
else
    ssh -i "$KEY" -o StrictHostKeyChecking=no "$HOST"
fi
