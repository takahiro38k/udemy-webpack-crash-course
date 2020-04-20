// require('path') は Node.js の path module のこと。
const path = require('path')

// path.resolve()
// 1st para と 2nd para を連結し、絶対pathを作成する。
// __dirname => このファイルが存在するディレクトリ。
const outputPath = path.resolve(__dirname, 'dist')
// console.log({outputPath})

module.exports = {
  // webpackのエントリーポイント
  // エントリーポイントとは、bundleの対照物のこと。
  entry: './src/index.js',
  output: {
    // バンドル後に出力するファイル名
    filename: 'main.js',
    // 出力先
    path: outputPath
  }
}
