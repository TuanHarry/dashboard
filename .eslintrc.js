module.exports = {
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "postcss-modules"
  ],
  "rules": {
    "postcss-modules/no-undef-class": [2],
    "postcss-modules/no-unused-class": [1],
    "@typescript-eslint/no-var-requires": "off"
  },
  "overrides": [
    {
      "files": ["**/*.css"],
      "rules": {
        "postcss-modules/no-undef-class": "off",
        "postcss-modules/no-unused-class": "off"
      }
    }
  ]
};
