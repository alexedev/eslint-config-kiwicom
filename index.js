// @flow

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  rules: {
    // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
    'for-direction': ERROR,
    'getter-return': ERROR,
    'no-async-promise-executor': WARN,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': WARN,
    'no-console': ERROR,
    'no-constant-condition': [WARN, { checkLoops: false }],
    'no-control-regex': WARN,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': WARN,
    'no-empty': [WARN, { allowEmptyCatch: true }],
    'no-empty-character-class': WARN,
    'no-ex-assign': WARN,
    'no-extra-boolean-cast': WARN,
    'no-extra-parens': OFF,
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': WARN,
    'no-invalid-regexp': WARN,
    'no-irregular-whitespace': WARN,
    'no-misleading-character-class': WARN,
    'no-obj-calls': ERROR,
    'no-prototype-builtins': OFF,
    'no-regex-spaces': WARN,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': OFF,
    'no-unexpected-multiline': WARN,
    'no-unreachable': ERROR,
    'no-unsafe-finally': WARN,
    'no-unsafe-negation': ERROR,
    'require-atomic-updates': ERROR,
    'use-isnan': ERROR,
    'valid-jsdoc': OFF,
    'valid-typeof': OFF, // see: babel/valid-typeof

    // Best Practices (http://eslint.org/docs/rules/#best-practices)
    'accessor-pairs': [WARN, { setWithoutGet: true }],
    'array-callback-return': OFF,
    'block-scoped-var': OFF,
    'class-methods-use-this': OFF,
    complexity: OFF,
    'consistent-return': [ERROR, { treatUndefinedAsUnspecified: false }],
    curly: [ERROR, 'all'],
    'default-case': OFF,
    'dot-location': [WARN, 'property'],
    'dot-notation': WARN,
    eqeqeq: [WARN, 'smart'],
    'guard-for-in': OFF,
    'max-classes-per-file': OFF,
    'no-alert': WARN,
    'no-await-in-loop': WARN,
    'no-caller': ERROR,
    'no-case-declarations': WARN,
    'no-div-regex': WARN,
    'no-else-return': ERROR,
    'no-empty-function': OFF,
    'no-empty-pattern': WARN,
    'no-eq-null': OFF,
    'no-eval': ERROR,
    'no-extend-native': WARN,
    'no-extra-bind': WARN,
    'no-extra-label': WARN,
    'no-fallthrough': WARN,
    'no-floating-decimal': ERROR,
    'no-global-assign': [ERROR, { exceptions: ['Map', 'Set'] }],
    'no-implicit-coercion': OFF,
    'no-implicit-globals': OFF,
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF,
    'no-iterator': WARN,
    'no-labels': [ERROR, { allowLoop: true, allowSwitch: true }],
    'no-lone-blocks': WARN,
    'no-loop-func': OFF,
    'no-magic-numbers': OFF,
    'no-multi-spaces': [WARN, { exceptions: { Property: true } }],
    'no-multi-str': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': WARN,
    'no-new': WARN,
    'no-octal': WARN,
    'no-octal-escape': WARN,
    'no-param-reassign': ERROR,
    'no-proto': ERROR,
    'no-redeclare': [WARN, { builtinGlobals: true }],
    'no-restricted-properties': OFF,
    'no-return-assign': WARN,
    'no-return-await': WARN,
    'no-script-url': ERROR,
    'no-self-assign': WARN,
    'no-self-compare': WARN,
    'no-sequences': WARN,
    'no-throw-literal': WARN,
    'no-unmodified-loop-condition': OFF,
    'no-unused-expressions': OFF, // see: babel/no-unused-expressions
    'no-unused-labels': WARN,
    'no-useless-call': WARN,
    'no-useless-catch': WARN,
    'no-useless-concat': WARN,
    'no-useless-escape': WARN,
    'no-useless-return': WARN,
    'no-void': WARN,
    'no-warning-comments': OFF,
    'no-with': WARN,
    'prefer-promise-reject-errors': WARN,
    radix: ERROR,
    'require-await': OFF,
    'require-unicode-regexp': OFF,
    'vars-on-top': OFF,
    'wrap-iife': [WARN, 'inside'],
    yoda: WARN,

    // Strict Mode (http://eslint.org/docs/rules/#strict-mode)
    strict: WARN,

    // Variables (http://eslint.org/docs/rules/#variables)
    'init-declarations': OFF,
    'no-delete-var': ERROR,
    'no-label-var': WARN,
    'no-restricted-globals': OFF,
    'no-shadow-restricted-names': WARN,
    'no-shadow': OFF,
    'no-undef-init': OFF,
    'no-undef': ERROR,
    'no-undefined': OFF,
    'no-unused-vars': [WARN, { args: 'none' }],
    'no-use-before-define': OFF,

    // Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs)
    'callback-return': OFF,
    'global-require': OFF,
    'handle-callback-err': WARN,
    'no-buffer-constructor': WARN,
    'no-mixed-requires': OFF,
    'no-new-require': WARN,
    'no-path-concat': WARN,
    'no-process-env': OFF,
    'no-process-exit': OFF,
    'no-restricted-modules': OFF,
    'no-sync': OFF,

    // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
    'array-bracket-newline': [WARN, 'consistent'],
    'array-bracket-spacing': WARN,
    'array-element-newline': [WARN, 'consistent'],
    'block-spacing': WARN,
    'brace-style': [WARN, '1tbs', { allowSingleLine: true }],
    camelcase: OFF, // see: babel/camelcase
    'capitalized-comments': OFF,
    'comma-dangle': [
      WARN,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': WARN,
    'comma-style': WARN,
    'computed-property-spacing': WARN,
    'consistent-this': OFF,
    'eol-last': ERROR,
    'func-call-spacing': WARN,
    'func-name-matching': OFF,
    'func-names': OFF,
    'func-style': OFF,
    'function-paren-newline': OFF,
    'id-blacklist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    'implicit-arrow-linebreak': OFF,
    indent: OFF,
    // indent: [WARN, 2, { SwitchCase: 1 }], // broken in some cases (multiline ternary)
    'jsx-quotes': [WARN, 'prefer-double'],
    'key-spacing': [WARN, { beforeColon: false, afterColon: true }],
    'keyword-spacing': WARN,
    'line-comment-position': OFF,
    'linebreak-style': WARN,
    'lines-around-comment': OFF,
    'lines-between-class-members': [
      WARN,
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-depth': OFF,
    'max-len': OFF,
    'max-lines': OFF,
    'max-lines-per-function': OFF,
    'max-nested-callbacks': OFF,
    'max-params': OFF,
    'max-statements': OFF,
    'max-statements-per-line': OFF,
    'multiline-comment-style': OFF,
    'multiline-ternary': OFF,
    'new-cap': OFF,
    'new-parens': ERROR,
    'newline-per-chained-call': OFF,
    'no-array-constructor': WARN,
    'no-bitwise': WARN,
    'no-continue': OFF,
    'no-inline-comments': OFF,
    'no-lonely-if': ERROR,
    'no-mixed-operators': OFF,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multi-assign': OFF,
    'no-multiple-empty-lines': [WARN, { max: ERROR, maxBOF: OFF, maxEOF: 1 }],
    'no-negated-condition': OFF,
    'no-nested-ternary': OFF,
    'no-new-object': WARN,
    'no-plusplus': OFF,
    'no-restricted-syntax': OFF,
    'no-tabs': ERROR,
    'no-ternary': OFF,
    'no-trailing-spaces': WARN,
    'no-underscore-dangle': OFF,
    'no-unneeded-ternary': WARN,
    'no-whitespace-before-property': WARN,
    'nonblock-statement-body-position': WARN,
    'object-curly-newline': OFF,
    'object-curly-spacing': [ERROR, 'always'],
    'object-property-newline': OFF,
    'one-var-declaration-per-line': OFF,
    'one-var': [WARN, { initialized: 'never' }],
    'operator-assignment': WARN,
    'operator-linebreak': OFF,
    'padded-blocks': OFF,
    'padding-line-between-statements': OFF,
    'prefer-object-spread': OFF,
    'quote-props': [
      WARN,
      'as-needed',
      {
        numbers: true,
      },
    ],
    quotes: OFF, // see: babel/quotes
    'require-jsdoc': OFF,
    'semi-spacing': ERROR,
    'semi-style': [ERROR, 'last'],
    semi: OFF, // see: babel/semi
    'sort-keys': OFF,
    'sort-vars': OFF,
    'space-before-blocks': WARN,
    'space-before-function-paren': [
      WARN,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'space-in-parens': [WARN, 'never'],
    'space-infix-ops': [WARN, { int32Hint: true }],
    'space-unary-ops': [WARN, { words: true, nonwords: false }],
    'spaced-comment': [
      ERROR,
      'always',
      {
        block: {
          balanced: true,
          markers: [':', '::'], // flow
        },
      },
    ],
    'switch-colon-spacing': WARN,
    'template-tag-spacing': WARN,
    'unicode-bom': [WARN, 'never'],
    'wrap-regex': OFF,

    // ECMAScript 6 (http://eslint.org/docs/rules/#ecmascript-6)
    'arrow-body-style': OFF,
    // 'arrow-parens': [WARN, 'as-needed'],
    'arrow-parens': OFF,
    'arrow-spacing': WARN,
    'constructor-super': ERROR,
    'generator-star-spacing': WARN,
    'no-class-assign': WARN,
    'no-confusing-arrow': [ERROR, { allowParens: true }],
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': WARN,
    'no-new-symbol': WARN,
    'no-restricted-imports': OFF,
    'no-this-before-super': ERROR,
    'no-useless-computed-key': WARN,
    'no-useless-constructor': WARN,
    'no-var': WARN,
    'no-useless-rename': WARN,
    'object-shorthand': OFF,
    'prefer-arrow-callback': [WARN, { allowNamedFunctions: true }],
    'prefer-const': [ERROR, { destructuring: 'all' }],
    'prefer-destructuring': OFF,
    'prefer-numeric-literals': OFF,
    'prefer-rest-params': WARN,
    'prefer-spread': WARN,
    'prefer-template': OFF,
    'require-yield': OFF,
    'rest-spread-spacing': WARN,
    'sort-imports': OFF,
    'symbol-description': WARN,
    'template-curly-spacing': WARN,
    'yield-star-spacing': WARN,

    // Babel (https://github.com/babel/eslint-plugin-babel)
    'babel/camelcase': [
      ERROR,
      {
        ignoreDestructuring: false,
        properties: 'never', // it's quite common to have object properties mixed
      },
    ],
    'babel/new-cap': OFF,
    'babel/object-curly-spacing': OFF,
    'babel/no-invalid-this': OFF,
    'babel/no-unused-expressions': WARN, // TODO: ERROR in new major release
    'babel/quotes': [WARN, 'single', 'avoid-escape'],
    'babel/semi': ERROR,
    'babel/valid-typeof': ERROR,

    // flowtype (https://github.com/gajus/eslint-plugin-flowtype)
    'flowtype/boolean-style': WARN,
    'flowtype/define-flow-type': WARN,
    'flowtype/delimiter-dangle': [WARN, 'always-multiline'],
    'flowtype/generic-spacing': OFF,
    'flowtype/no-dupe-keys': WARN,
    'flowtype/no-primitive-constructor-types': WARN,
    'flowtype/no-weak-types': OFF,
    'flowtype/object-type-delimiter': WARN,
    'flowtype/require-parameter-type': OFF,
    'flowtype/require-return-type': OFF,
    'flowtype/require-valid-file-annotation': [ERROR, 'always'],
    'flowtype/newline-after-flow-annotation': [ERROR, 'always'],
    'flowtype/require-variable-type': OFF,
    'flowtype/semi': ERROR,
    'flowtype/sort-keys': OFF,
    'flowtype/space-after-type-colon': [WARN, 'always'],
    'flowtype/space-before-generic-bracket': WARN,
    'flowtype/space-before-type-colon': WARN,
    'flowtype/type-id-match': OFF,
    'flowtype/union-intersection-spacing': WARN,
    'flowtype/use-flow-type': WARN,
    'flowtype/valid-syntax': OFF,

    // Jasmine (https://github.com/jest-community/eslint-plugin-jest)
    'jest/consistent-test-it': OFF,
    'jest/expect-expect': OFF,
    'jest/lowercase-name': OFF,
    'jest/no-alias-methods': OFF,
    'jest/no-disabled-tests': WARN,
    'jest/no-focused-tests': ERROR,
    'jest/no-hooks': OFF, // TODO: WARN
    'jest/no-identical-title': WARN, // TODO: ERROR
    'jest/no-jasmine-globals': WARN, // TODO: ERROR
    'jest/no-jest-import': WARN, // TODO: ERROR
    'jest/no-large-snapshots': OFF,
    'jest/no-test-callback': OFF,
    'jest/no-test-prefixes': OFF,
    'jest/no-test-return-statement': WARN, // TODO: ERROR
    'jest/no-truthy-falsy': OFF,
    'jest/prefer-expect-assertions': OFF,
    'jest/prefer-inline-snapshots': OFF,
    'jest/prefer-spy-on': OFF,
    'jest/prefer-strict-equal': OFF, // TODO: WARN
    'jest/prefer-to-be-null': OFF, // TODO: WARN
    'jest/prefer-to-be-undefined': OFF, // TODO: WARN
    'jest/prefer-to-contain': OFF, // TODO: WARN
    'jest/prefer-to-have-length': OFF, // TODO: WARN
    'jest/require-tothrow-message': OFF,
    'jest/valid-describe': WARN, // TODO: ERROR
    'jest/valid-expect': WARN,
    'jest/valid-expect-in-promise': WARN, // TODO: ERROR

    // prefer-object-spread (https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread)
    'prefer-object-spread/prefer-object-spread': WARN,

    // React (https://github.com/yannickcr/eslint-plugin-react)
    'react/display-name': OFF,
    'react/forbid-component-props': OFF,
    'react/forbid-prop-types': OFF,
    'react/no-access-state-in-setstate': ERROR,
    'react/no-children-prop': OFF,
    'react/no-danger': OFF,
    'react/no-danger-with-children': OFF,
    'react/no-deprecated': WARN,
    'react/no-did-mount-set-state': WARN, // TODO: ERROR
    'react/no-did-update-set-state': WARN, // TODO: ERROR
    'react/no-direct-mutation-state': WARN,
    'react/no-find-dom-node': OFF,
    'react/no-is-mounted': WARN,
    'react/no-multi-comp': OFF,
    'react/no-render-return-value': OFF,
    'react/no-set-state': OFF,
    'react/no-string-refs': OFF,
    'react/no-unescaped-entities': OFF,
    'react/no-unknown-property': WARN,
    'react/no-unused-prop-types': OFF,
    'react/prefer-es6-class': OFF,
    'react/prefer-stateless-function': OFF,
    'react/prop-types': OFF, // we use Flow instead,
    'react/react-in-jsx-scope': WARN,
    'react/require-optimization': OFF,
    'react/require-render-return': OFF,
    'react/self-closing-comp': WARN,
    'react/sort-comp': OFF,
    'react/sort-prop-types': OFF,
    'react/style-prop-object': OFF,
    'react/jsx-boolean-value': OFF,
    'react/jsx-closing-bracket-location': [
      WARN,
      { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned' },
    ],
    'react/jsx-curly-spacing': [WARN, 'never'],
    'react/jsx-equals-spacing': [WARN, 'never'],
    'react/jsx-filename-extension': OFF,
    'react/jsx-first-prop-new-line': OFF,
    'react/jsx-handler-names': OFF,
    'react/jsx-indent': [WARN, 2],
    'react/jsx-indent-props': [WARN, 2],
    'react/jsx-key': WARN,
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-no-bind': ERROR,
    'react/jsx-no-comment-textnodes': WARN,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-target-blank': OFF,
    'react/jsx-no-undef': ERROR,
    'react/jsx-pascal-case': OFF,
    'react/jsx-sort-props': OFF,
    'react/jsx-tag-spacing': [WARN, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/jsx-wrap-multilines': WARN,

    // React Native (https://github.com/Intellicode/eslint-plugin-react-native)
    'react-native/no-unused-styles': ERROR,

    // Relay (https://github.com/relayjs/eslint-plugin-relay)
    'relay/generated-flow-types': ERROR,
    'relay/graphql-naming': ERROR,
    'relay/graphql-syntax': ERROR,
    'relay/no-future-added-value': ERROR,
    'relay/unused-fields': ERROR,

    // import (https://github.com/benmosher/eslint-plugin-import)
    'import/order': [
      ERROR,
      {
        groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': OFF,
    'import/newline-after-import': ERROR,
    'import/no-dynamic-require': OFF,
    'import/no-mutable-exports': ERROR,
    'import/no-absolute-path': ERROR,
    'import/no-useless-path-segments': ERROR,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
      },
    ],

    // dependencies (https://github.com/zertosh/eslint-plugin-dependencies)
    'dependencies/case-sensitive': ERROR,
    'dependencies/no-cycles': WARN,
    'dependencies/no-unresolved': ERROR,
    'dependencies/require-json-ext': ERROR,

    // monorepo (https://github.com/azz/eslint-plugin-monorepo)
    'monorepo/no-internal-import': ERROR,
    'monorepo/no-relative-import': ERROR,

    // Node.js (https://github.com/mysticatea/eslint-plugin-node)
    'node/no-missing-require': WARN, // TODO: ERROR in new major release
    'node/no-deprecated-api': WARN,

    // Eslint comments (https://github.com/mysticatea/eslint-plugin-eslint-comments)
    'eslint-comments/no-duplicate-disable': WARN,
    'eslint-comments/no-unused-enable': WARN,

    // Kiwi.com custom rules
    'kiwi-graphql/only-nullable-fields': ERROR,
  },

  plugins: [
    'eslint-plugin-babel',
    'eslint-plugin-flowtype',
    'eslint-plugin-jest',
    'eslint-plugin-prefer-object-spread',
    'eslint-plugin-react',
    'eslint-plugin-react-native',
    'eslint-plugin-relay',
    'eslint-plugin-import',
    'eslint-plugin-dependencies',
    'eslint-plugin-monorepo',
    'eslint-plugin-node',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-kiwi-graphql',
  ],
};
