// const helper = require('./helper')
const fs = require('fs')

module.exports = (api, _, __, invoking) => { // eslint-disable-line no-unused-vars
  api.render('./template')

  api.extendPackage({
    scripts: {
      "deploy": "firebase deploy",
      "deploy:functions": "firebase deploy --only functions",
      "deploy:rule": "firebase deploy --only firestore:rules",
      "deploy:hosting": "firebase deploy --only hosting",
      "build:deploy": "npm run build && firebase deploy",
      "build:deploy:hosting": "npm run build && firebase deploy --only hosting"
    },
    dependencies: {
      "firebase": "latest",
      "firebase-admin": "latest",
      "firebase-functions": "latest"
    },
  })

  if (api.invoking) {
    if (!fs.existsSync(api.entryFile)) {
      throw Error('エントリーファイルがありません。')
    }
    api.injectImports(api.entryFile, `import './firebase'`)
  }
  // api.render(files => {
  //   const insert_str = `import './firebase'`
  //   helper.insert_to_file(insert_str, 'src/main.js', files)
  // })
}
