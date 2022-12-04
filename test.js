import base32 from './dist/base32.js'
import test from 'tape'

const uint8Array = new TextEncoder().encode('hi')

test('base32', tape => {
  tape.plan(6)

  const base32Encoded = base32.encode(uint8Array)
  const base32HexEncoded = base32.encodeHex(uint8Array)

  tape.ok(base32Encoded.length === 3, 'can encode')
  tape.ok(base32HexEncoded.length === 3, 'can encode hex')
  
  tape.ok(base32.isBase32(base32Encoded), 'is base32String')
  tape.ok(base32.isBase32Hex(base32HexEncoded), 'is base32HexString')

  const base32Decoded = base32.decode(base32Encoded)
  const base32HexDecoded = base32.decodeHex(base32HexEncoded, true)
  
  const string = new TextDecoder().decode(base32Decoded)
  const stringHex = new TextDecoder().decode(base32HexDecoded)

  tape.ok(string === 'hi', 'can decode')
  tape.ok(stringHex === 'hi', 'can decode hex')
})
