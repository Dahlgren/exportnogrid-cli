const fs = require('fs-extra')
const path = require('path')

const copyWorlds = require('./utils/copyWorlds')
const createAutoTestFile = require('./utils/createAutoTestFile')
const createTestMission = require('./utils/createTestMission')
const startArma = require('./utils/startArma')

const armaPath = 'D:\\SteamLibrary\\steamapps\\common\\Arma 3\\arma3_x64.exe'
const autoTestFilePath = path.resolve('autotest.cfg')
const missionsPath = path.resolve('missions')
const worldsPath = path.resolve('worlds')

const mods = require('./mods.json')
const worlds = require('./worlds.json')

fs.removeSync(missionsPath)
fs.removeSync(worldsPath)

const missions = worlds.map(function (world) {
  createTestMission('missions', world)
  return {
    name: world,
    path: path.resolve(missionsPath, `exportnogrid.${world}`)
  }
})

createAutoTestFile(missions, autoTestFilePath)

const arma = startArma(armaPath, mods, autoTestFilePath)
arma.on('exit', function (code) {
  console.log('Arma exited with status ' + code)
  copyWorlds(worlds, worldsPath)
})
