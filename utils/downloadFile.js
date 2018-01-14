const fs = require('fs')
const request = require('request')

module.exports = function (url, path) {
  var file = fs.createWriteStream(path)

  var download = request.get(url).pipe(file)

  return new Promise(function (resolve, reject) {
    download.on('error', function (err) {
      reject(err)
    })
    file.on('end', function () {
      resolve()
    })
    file.on('error', function (err) {
      reject(err)
    })
  })
}
