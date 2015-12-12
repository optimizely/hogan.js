var fs = require('fs')
var path = require('path')
var Compiler = require('./lib/compiler')
var runtime = fs.readFileSync(path.join(__dirname, 'runtime.js'), 'utf8');
var getHogan = new Function(runtime + '; return Hogan')
var Hogan = getHogan();

var t = Compiler.compile('Hello {{name}} im {{ person.name }} banana{{^peeled}} peel {{/peeled}}{{#list}}{{id}} {{/list}}', { asString: 1})
var fn = new Function('return ' + t)
var t = new Hogan(fn());




var output = t.render({
  name: 'jordan',
  peeled: false,
  person: {
    name: 'computer',
  },
  list: [
    { id: 'first' },
    { id: 'second' },
    { id: 'third' },
  ],
});
var expected = 'Hello jordan im computer banana peel first second third ';
console.assert(expected === output)
console.log('SUCCESS')

