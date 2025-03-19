#!/usr/bin/env bash

source "./flatpak.sh"

if command -v flatpak &>/dev/null; then
    flatpak --user --noninteractive --assumeyes install md.obsidian.Obsidian
fi
