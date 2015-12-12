module.exports = {
  entry: './lib/template.js',
  output: {
    filename: './runtime.js',
    libraryTarget: 'var',
    library: 'Hogan',
  },
}
