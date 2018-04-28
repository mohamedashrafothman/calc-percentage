calc-percentage
=============

A simple function to convert numbers to string percentages with options.

```js
percentage(0.12) // "12%"
percentage(1) // "100%"
percentage(-0.1) // "-10%"
percentage(1 / 3) // "33%"

percentage(0.1234) // "12%"
percentage(0.1234, 0) // "12%"
percentage(0.1234, 1) // "12.3%"
percentage(0.1234, 2) // "12.34%"

percentage(Infinity) // "∞%"

percentage(45, 50, {percSign: true}) // "90%"
percentage(100, 50, {decimal: 3,percSign: true}) // "200.000%"
```
## Install

```
$ npm i calc-percentage
```


## Usage

```js
var { percentage } = require('calc-percentage');

percentage(0.12) // "12%"
percentage(1) // "100%"
percentage(-0.1) // "-10%"
percentage(1 / 3) // "33%"
percentage(0.1234) // "12%"

percentage(Infinity) // "∞%"

percentage(45, 50, {percSign: true}) // "90%"
percentage(100, 50, {decimal : 3,percSign: true}) // "200.000%" 
percentage(50, 100, {decimal: 1}) // "50.0"

```

## API

### calcPercent(val, total, opts = {decimal,percSign})

#### val

Type: `number`

Value which should be calculated.

#### total

Type: `number`

Total that `val` should be compared against.

#### options.decimal

Type: `number`  
Default: `0`

Number of decimals.

#### options.percSign

Type: `string`

Append a % sign.


## License

MIT © [Mohamed Ashraf Othman](https://mohamedashrafothman.github.io/portfolio/)
