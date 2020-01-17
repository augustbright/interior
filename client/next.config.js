const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: (fileName, options) => options.query.type || 'scoped'
          }
        }
      ]
    });

    config.module.rules.push({
        test: /\.s[ca]ss$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require("styled-jsx/webpack").loader,
            options: {
              type: (fileName, options) => options.query.type || 'scoped'
            }
          },
          'sass-loader'
        ]
      });
  
    return config;
  }
});
