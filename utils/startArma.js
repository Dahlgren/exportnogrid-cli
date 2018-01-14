const spawnAsAdmin = require('spawn-as-admin')

module.exports = function (armaPath, mods, autoTestFilePath) {
  return spawnAsAdmin(armaPath, [
    `-autotest=${autoTestFilePath}`,
    `-mod=${mods.join(';')}`,
    '-noPause',
    '-noSplash',
    '-world=empty'
  ])
}
