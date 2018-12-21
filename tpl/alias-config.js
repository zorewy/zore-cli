const path = require('path');
module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src')
    }
  }
};