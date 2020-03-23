module.exports.insert_to_file = (insert_str, file, files) => {
  let a = files[file]
  // まだ記述なければ先頭に追記
  if(a.indexOf(insert_str) < 0) { 
    files[file] = insert_str + `\n` + a
  }
}
