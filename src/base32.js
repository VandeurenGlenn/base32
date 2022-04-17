import base from '@vandeurenglenn/base-x'

const base32 = 'abcdefghijklmnopqrstuvwxyz234567'
const base32Hex = '0123456789abcdefghijklmnopqrstuv'

export default {
  encode: (uint8Array, hex = false) => {
    const encoder = hex ? base(base32Hex) : base(base32)
    return encoder.encode(uint8Array)
  },
  decode: (uint8Array, hex = false) => {
    const decoder = hex ? base(base32Hex) : base(base32)
    return decoder.decode(uint8Array)
  }
}
