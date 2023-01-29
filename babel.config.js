module.exports = {
  plugins: [
    // これを設定すると、ブラウザのconsoleで、window.__coverage__が取れるようになる。
    ['babel-plugin-istanbul', {
      // .vueを加えないとvueファイルが、window.__coverage__に含まれない。
      extension: ['.js', '.vue']
    }]
  ],
  presets: [
    '@vue/app',

    // ↓ これいらない
    // '@vue/cli-plugin-babel/preset'
  ]
}