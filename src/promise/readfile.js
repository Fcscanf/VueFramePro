const fs = require('fs')

function getFileByPathPro (fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

getFileByPathPro('./file/1.txt')
  .then(function (data) {
    console.log(data)
    return getFileByPathPro('./file/2.txt')
  })
  .then(function (data) {
    console.log(data)
    return getFileByPathPro('./file/3.txt')
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.log(err.message)
  })
