#!/bin/bash
set -e

echo "---\n# License for Instrument Sans Variable font\n" >> dist/licenses.md
cat dist/acknowledgements.txt >> dist/licenses.md
rm dist/acknowledgements.txt
