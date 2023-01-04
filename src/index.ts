import baseX from '@vandeurenglenn/base-x'

/**
 * A base32 string only contains 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
 */
type base32String  = string

/**
 * A base32 string only contains 'ABCDEFGHIJKLMNOPQRSTUV234567'
 */
type base32HexString  = string

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
const ALPHABET_HEX = '0123456789ABCDEFGHIJKLMNOPQRSTUV'

const base32 = baseX(ALPHABET)
const base32Hex = baseX(ALPHABET_HEX)

export const decode = base32.decode

export const decodeHex = base32Hex.decode

export const encode = base32.encode

export const encodeHex = base32Hex.encode

export const isBase32 = (string: base32String, hex = false): boolean => {
  try {
    if (hex) decodeHex(string)
    else decode(string)
    return true;
  } catch (e) {
    return false;
  }
}

export const isBase32Hex = (string: base32HexString): boolean => {
  return isBase32(string, true)
}

export default {
  encode,
  decode,
  encodeHex,
  decodeHex,
  isBase32,
  isBase32Hex
}
