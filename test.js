var Hogan = require('./lib/hogan')
var T = require('./dist/template-3.0.2')

var string
//var t = Hogan.compile('hello {{ name }}.  Im {{ person.name }}\nlist {{^banana}} foo {{/banana}}{{#list}} {{id}} {{/list}}')
var t = Hogan.compile('{{#banana}} {{banana}} {{/banana}}', { asString: 1})
console.log(t)
var fn = new Function('return ' + t)
var t = new T.Template(fn());




var output = t.render({
  name: 'jordan',
  banana: 'peel',
  person: {
    name: 'computer',
  },
  list: [
    { id: 'first' },
    { id: 'second' },
    { id: 'third' },
  ],
});
console.log(output)

