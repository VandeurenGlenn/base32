import base from '@vandeurenglenn/base-x'

const base32 = 'abcdefghijklmnopqrstuvwxyz234567'
const base32Hex = '0123456789abcdefghijklmnopqrstuv'

const decode = (string: string, hex = false) => {
  const decoder = hex ? base(base32Hex) : base(base32)
  return decoder.decode(string)
}

export default {
  encode: (uint8Array: Uint8Array, hex = false) => {
    const encoder = hex ? base(base32Hex) : base(base32)
    return encoder.encode(uint8Array)
  },
  decode,
  isBase32: (string: string, hex = false) => {
    try {
      decode(string, hex)
      return true;
    } catch (e) {
      return false;
    }
  }
}
