const fs = require('fs')
const path = require('path')

function getFileByPath (fpath, succCb, errCb) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) return errCb(err)
    succCb(dataStr)
  })
}

getFileByPath(path.join(__dirname, './file/1.txt'), function (data) {
  console.log(data)
}, function (err) {
  console.log(err.message)
})
