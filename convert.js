const async = require('async')
const fs = require('fs-extra')
const path = require('path')
const os = require('os')
const { spawn } = require('child_process')

const emfToPngPath = 'emftopng.exe'
const worldsPath = path.resolve('worlds')

const pngIendData = new Uint8Array([
  0, 0, 0, 0,  // zero pad
  73, 69, 78, 68, // iend marker
  174, 66, 96, 130 // crc
])

const worlds = fs.readdirSync(worldsPath)
  .filter(function (file) {
    return file.endsWith('.emf')
  })

async.eachLimit(worlds, os.cpus().length, function (file, callback) {
  const emfPath = path.resolve(worldsPath, file)
  const convert = spawn(emfToPngPath, [emfPath])
  convert.on('exit', function (code) {
    const pngPath = path.resolve(worldsPath, file.replace('.emf', '.png'))
    fs.appendFile(pngPath, new Buffer(pngIendData))
    callback()
  })
})
