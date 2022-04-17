const base32 = require('./dist/base32');

const uint8Array = new TextEncoder().encode('hi')

const base32Encoded = base32.encode(uint8Array)
const base32HexEncoded = base32.encode(uint8Array, true)

console.log(base32Encoded)
console.log(base32HexEncoded)

const base32Decoded = base32.decode(base32Encoded)
const base32HexDecoded = base32.decode(base32HexEncoded, true)

const string = new TextDecoder().decode(base32Decoded)
const stringHex = new TextDecoder().decode(base32HexDecoded)

console.log(string)
console.log(stringHex)
