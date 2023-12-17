module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '500px',
        'mantine-breakpoint-sm': '770px',
        'mantine-breakpoint-md': '1025px',
        'mantine-breakpoint-lg': '1200px',
        'mantine-breakpoint-xl': '1367px',
      },
    },
  },
};