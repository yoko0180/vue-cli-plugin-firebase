// const helper = require('./helper')
const fs = require('fs')

module.exports = (api, _, __, invoking) => { // eslint-disable-line no-unused-vars
  api.render('./template')

  api.onCreateComplete(async () => {
    if (!fs.existsSync(api.entryFile)) {
      throw Error('エントリーファイルがありません。')
    }
    api.injectImports(api.entryFile, `import './firebase'`)
  })
  // api.render(files => {
  //   const insert_str = `import './firebase'`
  //   helper.insert_to_file(insert_str, 'src/main.js', files)
  // })
}
