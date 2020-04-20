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
  },
  module: {
    rules: [
      {
        // use: で指定するloaderをどのファイルに指定するか、正規表現で指定する。
        test: /\.css$/,
        // 使用するloaderを配列で指定する。
        /**
         * ❗️❗️❗️重要❗️❗️❗️
         * loaderは【逆順】で実行される(A chain is executed in reverse order.)。
         * なので、styleを適用、cssをjsのモジュールに変換して読み込み、
         * という時系列と逆の並びでないとエラーとなる。
         */
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        // jpeg jpg 両方とも可とする。
        // i オプションで大文字・小文字の区別をなくす。
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        // optionsでfile-loaderを有効化する。
        options: {
          // limit  閾値。今回は2KB。
          // name   limitを超える画像を、指定値でファイルとして分離する。
          //        ※実際に指定値のファイルを作成するわけではなく、
          //          そういうファイルがあるものとしてHTML上で処理される。
          limit: 2048,
          name: './images/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    // index.htmlの格納場所を指定し、ブラウザで即時オープンできる。
    contentBase: outputPath
  }
}
