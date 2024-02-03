module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config", "@nuxtjs/eslint-config-typescript"],
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    quotes: "off",
    "arrow-parens": "off",
    camelcase: "off",
    "comma-dangle": 0,
    semi: 0,
    curly: "off",
    "no-async-promise-executor": "off",
    "vue/no-v-for-template-key-on-child": "off",
  },
};
