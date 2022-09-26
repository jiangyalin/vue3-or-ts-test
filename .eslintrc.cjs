/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-standard',
    'standard'
  ],
  // extends: ['plugin:vue/essential', 'eslint:recommended', 'standard'],
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
	    env: {
		    mocha: true
	    }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // TYPE_A
    // 要求组件名称始终为多词
    'vue/multi-word-component-names': ['error', {
      ignores: ['home']
    }],
    // 禁止使用箭头函数定义观察者
    'vue/no-arrow-functions-in-watch': 'error',
    // 禁止在计算属性中执行异步操作
    'vue/no-async-in-computed-properties': 'error',
    // 禁止访问data
    'vue/no-computed-properties-in-data': 'error',
    // 禁止同一作用域下出现重复字段名
    'vue/no-dupe-keys': 'error',
    // 禁止v-if/v-else-if链中的重复条件
    'vue/no-dupe-v-else-if': 'error',
    // 禁止组件上出现重复属性
    'vue/no-duplicate-attributes': 'error',
    // 禁止改变prop属性值
    'vue/no-mutating-props': 'error',
    // 禁止覆盖保留字段
    'vue/no-reserved-keys': 'error',
    // 禁止覆盖props中的保留字段
    'vue/no-reserved-props': 'error',
    // 强制data必须为返回兑现的函数
    'vue/no-shared-component-data': 'error',
    // 禁止计算属性中出现副作用
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止template中使用属性
    'vue/no-template-key': 'error',
    // 强制textarea必须通过v-model绑定内容
    'vue/no-textarea-mustache': 'error',
    // 禁止存在未调用的组件引用
    'vue/no-unused-components': 'error',
    // 禁止v-for中使用未定义的属性
    'vue/no-unused-vars': 'error',
    // 禁止在与 v-for 相同的元素上使用 v-if
    'vue/no-use-v-if-with-v-for': 'error',
    // 禁止template上出现无用的属性
    'vue/no-useless-template-attributes': 'error',
    // component标签必须有is属性
    'vue/require-component-is': 'error',
    // 要求 prop 类型是构造函数
    'vue/require-prop-type-constructor': 'error',
    // 要求render必须任何情况下都有返回值
    'vue/require-render-return': 'error',
    // v-for循环必须有key属性
    'vue/require-v-for-key': 'error',
    // prop的默认值必须与类型一直
    'vue/require-valid-default-prop': 'error',
    // 要求计算属性必须任何情况下都有返回值
    'vue/return-in-computed-property': 'error',
    // 强制v-on使用exact修饰符
    'vue/use-v-on-exact': 'error',
    // 强制执行有效的nextTick函数调用
    'vue/valid-next-tick': 'error',
    // template必须有内容
    'vue/valid-template-root': 'error',
    // 强制正确使用v-bind
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',
    'vue/no-parsing-error': [
      2, {
        'x-invalid-end-tag': false
      }
    ],

	  // TYPE_A VUE3
	  // 禁止在数据上使用不推荐使用的对象声明
	  'vue/no-deprecated-data-object-declaration': 'error',
	  // 禁止使用已弃用destroyed和beforeDestroy生命周期挂钩
	  'vue/no-deprecated-destroyed-lifecycle': 'error',
	  // 禁止使用已弃用api $listeners
	  'vue/no-deprecated-dollar-listeners-api': 'error',
	  // 禁止使用已弃用api $scopedSlots
	  'vue/no-deprecated-dollar-scopedslots-api': 'error',
	  // 禁止使用已弃用的事件api
	  'vue/no-deprecated-events-api': 'error',
	  // 禁止使用已弃用的'|'语法
	  'vue/no-deprecated-filter': 'error',
	  // 禁止使用已弃用的functional template
	  'vue/no-deprecated-functional-template': 'error',
	  // 禁止在 HTML 元素上使用已弃用的is属性
	  'vue/no-deprecated-html-element-is': 'error',
	  // 禁止使用已弃用inline-template的属性
	  'vue/no-deprecated-inline-template': 'error',
	  // 禁止this在 props 默认函数中弃用访问
	  'vue/no-deprecated-props-default-this': 'error',
	  // 禁止使用已弃用的tag属性RouterLink
	  'vue/no-deprecated-router-link-tag-prop': 'error',
	  // 禁止使用已弃用的scope属性
	  'vue/no-deprecated-scope-attribute': 'error',
	  // 禁止使用已弃用的slot属性
	  'vue/no-deprecated-slot-attribute': 'error',
	  // 禁止使用已弃用的slot-scope属性
	  'vue/no-deprecated-slot-scope-attribute': 'error',
	  // 禁止在.sync指令上使用 deprecated 修饰符v-bind
	  'vue/no-deprecated-v-bind-sync': 'error',
	  // 禁止使用已弃用的v-is指令
	  'vue/no-deprecated-v-is': 'error',
	  // 禁止使用已弃用的.native的修饰符
	  'vue/no-deprecated-v-on-native-modifier': 'error',
	  // 禁止使用不推荐使用的数字（键码）修饰符
	  'vue/no-deprecated-v-on-number-modifiers': 'error',
	  // 禁止使用已弃用的Vue.config.keyCodes
	  'vue/no-deprecated-vue-config-keycodes': 'error',
	  // 禁止异步注册expose
	  'vue/no-expose-after-await': 'error',
	  // 禁止异步注册的生命周期钩子
	  'vue/no-lifecycle-after-await': 'error',
	  // 禁止v-key放置在v-for的子元素上
	  'vue/no-v-for-template-key-on-child': 'error',
	  // 禁止异步注册watch
	  'vue/no-watch-after-await': 'error',
	  // 强制从'vue'导入，而不是从'@vue/*'导入
	  'vue/prefer-import-from-vue': 'error',
	  // 强制将$slots的属性用作函数
	  'vue/require-slots-as-functions': 'error',
	  // 要求控制里面内容的显示<transition>
	  'vue/require-toggle-inside-transition': 'error',
	  // 执行有效的v-is指令
	  'vue/valid-v-is': 'error',
	  // 执行有效的v-memo指令
	  'vue/valid-v-memo': 'error',

    // TYPE_B
    // 强制自定义组件属性命名样式(always中横线)
    'vue/attribute-hyphenation': ['error', 'always', {
      ignore: []
    }],
    // 要求组件名称的连接格式kebab-case(中横线)，PascalCase（大驼峰）
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    // 属性换行规则（单属性换行）
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below'
    }],
    // 在标签的右括号前要求或禁止换行
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    // 在标签的右括号前要求或不允许有空格
    'vue/html-closing-bracket-spacing': 'warn',
    // 标签必须有结束符号
    'vue/html-end-tags': 'error',
    // 强制使用一致的缩进
    'vue/html-indent': 'error',
    // html强制使用双引号
    'vue/html-quotes': 'error',
    // 强制没有内容的html使用自关闭
    // 'vue/html-self-closing': 'error',
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    // 需要在多行元素的内容前后换行
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea'],
      allowEmptyLines: false
    }],
    // 在{{}}插值中强制统一间距(默认带前后空格)
    'vue/mustache-interpolation-spacing': 'error',
    // 禁止多个空格
    'vue/no-multi-spaces': 'error',
    // 不允许在属性中的等号周围有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 禁止子作用域覆盖父作用域的变量
    'vue/no-template-shadow': 'error',
    // 强制每个组件都是个独立的文件
    'vue/one-component-per-file': 'error',
    // 为 Vue 组件中的 Prop 名称强制执行特定大小写
    'vue/prop-name-casing': 'error',
    // prop属性必须有默认值
    'vue/require-default-prop': 'error',
    // prop属性必须有类型
    'vue/require-prop-types': 'error',
    // 需要在单行元素的内容前后换行
    // 'vue/singleline-html-element-content-newline': ['error', {
    //   ignoreWhenNoAttributes: true,
    //   ignoreWhenEmpty: true,
    //   ignores: []
    // }],
    // v-bind强制简写
    'vue/v-bind-style': 'warn',
    // v-on强制简写
    'vue/v-on-style': 'warn',
    // v-slot强制简写
    'vue/v-slot-style': 'error',

	  // TYPE_B VUE3
	  // emits必须是有效的
	  'vue/require-explicit-emits': 'error',
	  // 对模板中的自定义组件强制执行 v-on 事件命名样式
	  'vue/v-on-event-hyphenation': 'error',

    // TYPE_C
    // 强制执行属性顺序
    'vue/attributes-order': 'error',
    // 强制vue文件属性顺序
    'vue/component-tags-order': ['error', {
      order: [['script', 'template'], 'style']
    }],
    // 禁用无效template
    'vue/no-lone-template': 'warn',
    // 不允许将多个参数传递给作用域插槽
    // 'vue/no-multiple-slot-args': 'error',
    // 禁止使用v-html
    // 'vue/no-v-html': 'warn',
    // 强制组件中的属性顺序
    'vue/order-in-components': 'error',
    // 禁止模板中使用this
    'vue/this-in-template': 'error',

    // TYPE_D
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: []
    }],
    // 强制使用统一的html注释规则
    // 'vue/html-comment-content-newline': ['error', 'always', {
    //   exceptions: []
    // }],
    // 强制使用统一的html注释间隔规则
    // 'vue/html-comment-content-spacing': ['error', 'never', {
    //   exceptions: []
    // }],
    // 强制使用一致的html注释缩进
    'vue/html-comment-indent': ['error', 'tab'],
    // 强制prop中布尔类型的属性默认值为false(暂时标记)
    // 'vue/no-boolean-default': ['warn', 'default-false'],
    // 'vue/no-duplicate-attr-inheritance': 'error',
    // 不允许将多个对象传递到数组到类
    'vue/no-multiple-objects-in-class': 'error',
    // 禁止在组件的根属性中出现潜在的拼写错误
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['all'],
      custom: ['test']
    }],
    // 禁止组件名为vue保留字段
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: false,
      disallowVue3BuiltInComponents: false
    }],
    // 禁止html中出现非必要的行内样式
    'vue/no-static-inline-styles': ['error', {
      allowBinding: false
    }],
    // 禁止使用非当前版本vue的api
    'vue/no-unsupported-features': ['error', {
      version: '^3.2.0',
      ignores: []
    }],
    // 禁止使用未在components注册的组件
    // 'vue/no-unregistered-components': ['error', {
    //   ignorePatterns: ['router-view']
    // }],
    // 根节点需要添加空行
    'vue/padding-line-between-blocks': ['error', 'always'],

    // TYPE_F
    // 禁止非标准空格和制表符
    'vue/no-irregular-whitespace': ['error', {
      skipStrings: true,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
      skipHTMLAttributeValues: false,
      skipHTMLTextContents: false
    }],
    // 符号间距
    'vue/arrow-spacing': 'error',

    // 统一缩进
    indent: ['error', 2],

    // TYPE 其他
    'no-unused-vars': 'off',
    // 'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
  }
}
