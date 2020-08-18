const defaultTheme = require('tailwindcss/defaultTheme')
const tailwinduiColors = require('@tailwindcss/ui/colors')
const { override, addPostcssPlugins, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@font-family': ['Inter var', ...defaultTheme.fontFamily.sans],
        '@primary-color': tailwinduiColors.blue['500'],
        '@error-color': tailwinduiColors.red['500'],
        '@height-base': '40px',
        '@padding-sm': '16px',
        '@heading-color': tailwinduiColors.gray['900'],
        '@text-color': tailwinduiColors.gray['500'],
        '@border-radius-base': '4px',
      },
    },
  }),
  addPostcssPlugins([
    require('tailwindcss')(require('./tailwind.config')),
    require('autoprefixer'),
  ]),
)
