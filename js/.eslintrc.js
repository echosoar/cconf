module.exports = {
  "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
          "classes": true
      }
  },
  "extends": [
    "standard",
    "airbnb-base"
  ],
  "rules": {
      "semi": ["error", "always"],
      "no-bitwise": 0,
      "no-return-assign": 0,
      "eqeqeq": 0,
      "no-useless-escape": 0,
      "no-use-before-define": 0,
      "no-useless-constructor": 1,
      "space-before-function-paren": 0,
      "no-template-curly-in-string": 0
  },
  settings: {
    'import/resolver': {
        'webpack': {
            'config': 'webpack.config.js'
        }
    }
  }
}