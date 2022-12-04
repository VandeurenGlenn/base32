/**
 * a string containing only 0123456789abcdefghijklmnopqrstuv
 */

declare type base32HexString = string;

/**
 * a string containing only abcdefghijklmnopqrstuvwxyz234567
 */
declare type base32String = string;

declare module '@vandeurenglenn/base32' {
  export function encode(source: Uint8Array): base32String
  export function encodeHex(source: Uint8Array): base32HexString
  export function decode(source: base32String): Uint8Array
  export function decodeHex(source: base32HexString): Uint8Array
  export function isBase32(string: base32String): boolean
  export function isBase32Hex(string: base32HexString): boolean
}
