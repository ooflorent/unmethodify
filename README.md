# unmethodify

## Usage

```js
var unmethodify = require('unmethodify')
var hasOwnProperty = unmethodify(Object.property.hasOwnProperty)

var obj = {
  foo: 'bar'
}

hasOwnProperty(obj, 'foo') // true
hasOwnProperty(obj, 'baz') // false
```
