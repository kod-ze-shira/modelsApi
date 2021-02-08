
const fs = require('fs')
const path = require('path')


const getSchema = (req, res) => {
  let schemaName = req.params.schema

  fs.readFile(path.join(__dirname, `../models/Leader/${schemaName}` + ".js"), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    return res.send(data)
  })


}
module.exports = { getSchema }