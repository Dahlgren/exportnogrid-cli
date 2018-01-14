const fs = require('fs-extra')
const path = require('path')
const { spawn } = require('child_process')

const magickPath = 'magick'
const worldsPath = path.resolve('worlds')

fs.readdirSync(worldsPath)
.filter(function (file) {
  return file.endsWith('.png') && !file.endsWith('_trimmed.png')
})
.forEach(function (file) {
  const pngPath = path.resolve(worldsPath, file)
  const trimmedPngPath = pngPath.replace('.png', '_trimmed.png')
  spawn(magickPath, [
    'convert',
    pngPath,
    '-bordercolor black',
    '-border 1x1',
    '-fuzz 80%',
    '-trim',
    '+repage',
    trimmedPngPath
  ])
})
