const fs = require('fs-extra')
const path = require('path')
const url = require('url')

const downloadFile = require('./downloadFile')

const urlsToDownload = [
  'https://raw.githubusercontent.com/Dahlgren/exportnogrid-mission/master/init.sqf',
  'https://raw.githubusercontent.com/Dahlgren/exportnogrid-mission/master/mission.sqm'
]

module.exports = function (directory, world) {
  const missionPath = path.resolve('missions', `exportnogrid.${world}`)
  fs.ensureDirSync(missionPath)

  const downloads = urlsToDownload.map(function (fileUrl) {
    const parsedUrl = url.parse(fileUrl)
    const filename = path.basename(parsedUrl.pathname)
    const filePath = path.resolve(missionPath, filename)
    return downloadFile(fileUrl, filePath)
  })

  return Promise.all(downloads)
}
