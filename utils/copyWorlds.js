const fs = require('fs-extra')
const path = require('path')

module.exports = function (worlds, worldsPath) {
  fs.ensureDirSync(worldsPath)

  worlds.map(function (world) {
    const src = path.resolve('c:\\', `${world}_nogrid.emf`)
    const dst = path.resolve(worldsPath, `${world}.emf`)
    fs.copy(src, dst)
  })
}
