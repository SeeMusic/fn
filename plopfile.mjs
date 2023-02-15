export default function (plop) {
	plop.setGenerator('createFn', {
		description: 'Create New Fn',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: '函数名(必填)',
        default: 'doSomething',
        validate: function(input) {
          if (input === 'doSomething') {
            return false;
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'description',
        message: '一句话描述',
      },
		],
		actions: [
      // Create SourceCode and Unit Test
      {
        type: 'addMany',
        destination: 'packages/{{name}}',
        base: 'plop-templates/newFn',
        templateFiles: ['plop-templates/newFn/*.ts.hbs']
      },
      // Create Doc
      {
        type: 'add',
        path: 'docs/{{name}}.md',
        templateFile: 'plop-templates/newFn/doc.md.hbs'
      },
      // import newFn
      {
        type: 'modify',
        path: 'packages/index.ts',
        pattern: /(\/\/ IMPORT_PLACEHOLDER--DO_NOT_REMOVE)/g,
        template: 'import {{name}} from \'./{{name}}\';\n$1',
        type: 'modify',
      },
      // export newFn
      {
        type: 'modify',
        path: 'packages/index.ts',
        pattern: /(\/\/ EXPORT_PLACEHOLDER--DO_NOT_REMOVE)/g,
        template: '{{name}},\n$1',
        type: 'modify',
      },
    ]
	});
};
