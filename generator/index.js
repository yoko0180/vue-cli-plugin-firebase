const helper = require('./helper')

module.exports = (api, _, __, invoking) => { // eslint-disable-line no-unused-vars
  api.render('./template')

  api.render(files => {
    const insert_str = `import './firebase'`
    helper.insert_to_file(insert_str, 'src/main.js', files)
  })
}
