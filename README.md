# ExportNoGrid CLI

## Setup

Create `mods.json` and `worlds.json` according to the examples.

## Requirements

Arma 3 must be prepared with the exportnogrid ahk and dll.

The following binaries must be available in PATH,

* emftopng.exe
* magick.exe

## Scripts

Trigger the scripts with `npm run <script>`

### convert

Converts all EMF files to PNG images in worlds folder.

### export

Runs Arma 3 with desired mods and worlds to create typography EMF files in worlds folder.

### lint

Checks for code and syntax errors.

### trim

Tries to remove black borders from the converted png files in worlds folder.
