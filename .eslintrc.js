module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/airbnb",
    "@vue/typescript",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },

  plugins: [
    "vue",
    "json-format",
  ],

  rules: {
    "dot-notation": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "vue/no-deprecated-filter": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-deprecated-destroyed-lifecycle": "off",
    "vue/no-deprecated-v-bind-sync": "off",
    "vue/no-useless-template-attributes": "off",
    "max-len": ["error", { ignoreComments: true, code: 160 }],
    "vue/max-len": ["error", { code: 160, ignoreComments: true }],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    quotes: [
      "error",
      "double",
    ],
    "import/extensions": [
      "off",
      "ignorePackages",
    ],
    "import/no-unresolved": "off",
    // rule to enable semicolon in interface
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
      },
    ],
    // spacing after colon and spacing after and before arrow
    "@typescript-eslint/type-annotation-spacing": ["error", { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
    // space on curly braces
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error"],
    // space after and before equals to operator
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": ["error", { int32Hint: false }],
    // interface style rule
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // spacing in object
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    // semicolons at the end of types
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    /**
     * There is bug that gives error "Enum alrady declared in above scope"
     * whenever someone tries to declare an enum, the following rules
     * solve the error Refer: https://stackoverflow.com/a/63961972
     */
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],

  },
  overrides: [
    {
      files: ["./**/*.vue"],
      rules: {
        /**
         * Adding the indentation rule only to vue files
         * beacause in other files its conflicting
         */
        indent: "off",
        "@typescript-eslint/indent": ["error", 2],
      },
    },
  ],
};
