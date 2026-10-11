#!/usr/bin/env bash

set -euo pipefail

if ! [ -x "$(command -v magick)" ]; then
  echo "Error: magick is not installed."
  exit 1
fi

magick -background none -density 512 public/favicon.svg \
     -define icon:auto-resize=256,128,64,48,32,16 \
     public/favicon.ico

magick -background none -density 512 public/favicon.svg -resize 180x180 public/apple-touch-icon.png

