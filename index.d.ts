/**
 * A base32 string only contains 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
 */
export type base32String = string;
/**
 * A base32 string only contains 'ABCDEFGHIJKLMNOPQRSTUV234567'
 */
export type base32HexString = string;
export declare const decode: (string: string) => Uint8Array;
export declare const decodeHex: (string: string) => Uint8Array;
export declare const encode: (uint8Array: Uint8Array | ArrayBuffer | number[]) => string;
export declare const encodeHex: (uint8Array: Uint8Array | ArrayBuffer | number[]) => string;
export declare const isBase32: (string: base32String, hex?: boolean) => boolean;
export declare const isBase32Hex: (string: base32HexString) => boolean;
declare const _default: {
    encode: (uint8Array: Uint8Array | ArrayBuffer | number[]) => string;
    decode: (string: string) => Uint8Array;
    encodeHex: (uint8Array: Uint8Array | ArrayBuffer | number[]) => string;
    decodeHex: (string: string) => Uint8Array;
    isBase32: typeof isBase32;
    isBase32Hex: typeof isBase32Hex;
};
export default _default;
