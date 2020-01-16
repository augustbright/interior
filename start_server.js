require('@babel/polyfill');
require('@babel/register')({
      "extensions": [".js", ".jsx", ".ts", ".tsx"]
});

require('./server/start')(process.env);