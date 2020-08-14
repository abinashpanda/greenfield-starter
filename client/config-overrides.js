const defaultTheme = require('tailwindcss/defaultTheme')
const { override, addPostcssPlugins, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@font-family': ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  }),
  addPostcssPlugins([
    require('tailwindcss')(require('./tailwind.config')),
    require('autoprefixer'),
  ]),
)
