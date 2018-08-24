module.exports = {
    root: true, 
    extends: 'eslint:recommended',
    "env":{
        "node":true,
      },
    "parserOptions": {
        "ecmaVersion": 8
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "semi": ["warn", "never"],
        "quotes": "off",
        "no-console":"off",
        "no-unused-vars":"off",
        "no-unreachable":"off",
        "no-redeclare":"warn"
    }
};