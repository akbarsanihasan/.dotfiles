#!/usr/bin/env bash

source "./flatpak.sh"

if command -v flatpak &>/dev/null; then
    flatpak install --user --noninteractive --assumeyes org.onlyoffice.desktopeditors
fi
