/**
 * https://prettier.io/docs/en/options.html：请确保先执行了 yarn add prettier
 * 项目代码风格优先级
 * 1. .perttierc.js
 * 2. .editorconfig
 * 3. vscode中的设置
 */
 module.exports = {
  // 指定打印机将换行的行长度。默认 80
  printWidth: 100,
  // 指定每个缩进级别的空格数。默认 2
  // tabWidth: 2,
  // 指定使用制表符缩进行。 默认 false
  // useTabs: false,
  // 在语句末尾打印分号。默认 true
  // semi: true,
  // 使用单引号而不是双引号。默认 false
  singleQuote: true,
  // 引用对象中的属性时更改：默认 as-needed-仅在需要时在对象属性周围添加引号。可选"consistent" - 如果对象中至少有一个属性需要引号，则引用所有属性。"preserve" - 尊重对象属性中引号的输入用法。
  // quoteProps: 'as-needed',
  // 在jsx中使用单引号。默认 false
  jsxSingleQuote: true,
  // 多行时尽可能打印尾随逗号。默认 none-没有尾随逗号。可选：es5：在ES5中有效的尾随逗号（对象、数组等）。例如本文件，设置成 es5，就算你最后一个属性-属性值没有加逗号，也会帮你自动加上逗号
  trailingComma: 'es5',
  // 在对象文字中打印括号之间的空格。默认 true
  // bracketSpacing: true,
  // 将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。默认false
  // jsxBracketSameLine: false,
  // 在单个箭头函数参数周围加上括号。默认 avoid-尽可能的省略parens。例 x => x。可选 "always"-使用包括parens。例 (x) => x
  arrowParens: 'avoid',
  // 指定格式化文件的开始行。默认 0
  // rangeStart: 0,
  // 指定格式化文件的结束行。默认 Infinity
  // rangeEnd: Infinity
  // 指定要使用的解析器。prettier会自动从输入文件路径中推断出解析器。因此不必更改此设置。默认 babylon
  // parser: 'babylon'
  // 指定用于推断要使用的解析器的文件名
  // filepath: ''
  // 需要编译指示。默认 false
  // requirePragma: false
  // 插入Pragma。默认 false
  // insertPragma: false
  // 散文包裹。默认 preserve-按原样包装散文。可选，always-如果超过打印宽度就包装。never-不要包装
  // proseWrap: 'preserve'
  // HTML空白灵敏度 默认 css-尊重css display属性的默认值。可选：strict-空格被认为是敏感的，ignore-空格被认为是不敏感的
  // htmlWhitespaceSensitivity: 'css',
  // 行结尾：默认 auto-维护现有的行结尾，可选 lf-(\n)，在Linux和macOS以及git repos 内部很常见 crlf-回车符+换行符(\r\n), 在Windows上很常见 cr-仅限回车符，很少使用
  // endOfLine: 'auto',
};
