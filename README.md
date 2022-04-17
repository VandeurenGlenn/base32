# bs32

module compatible base32

## Usage

``` js
const base32 = require('@vandeurenglenn/base32')
// or
import base32 from '@vandeurenglenn/base32'

const uint8Array = new TextEncoder().encode('hi')

const base32Encoded = base32.encode(uint8Array)
const base32HexEncoded = base32.encode(uint8Array, true)

console.log(base32Encoded) // 2dj
console.log(base32HexEncoded) // q39

const base32Decoded = base32.decode(base32Encoded)
const base32HexDecoded = base32.decode(base32HexEncoded, true)

const string = new TextDecoder().decode(base32Decoded)
const stringHex = new TextDecoder().decode(base32HexDecoded)

console.log(string) // hi
console.log(stringHex) // hi

```
