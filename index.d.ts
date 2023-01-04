/**
 * A base32 string only contains 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
 */
type base32String = string;
/**
 * A base32 string only contains 'ABCDEFGHIJKLMNOPQRSTUV234567'
 */
type base32HexString = string;
export declare const decode: (source: string) => Uint8Array;
export declare const decodeHex: (source: string) => Uint8Array;
export declare const encode: (source: Uint8Array | ArrayBuffer) => string;
export declare const encodeHex: (source: Uint8Array | ArrayBuffer) => string;
export declare const isBase32: (string: base32String, hex?: boolean) => boolean;
export declare const isBase32Hex: (string: base32HexString) => boolean;
declare const _default: {
    encode: (source: Uint8Array | ArrayBuffer) => string;
    decode: (source: string) => Uint8Array;
    encodeHex: (source: Uint8Array | ArrayBuffer) => string;
    decodeHex: (source: string) => Uint8Array;
    isBase32: (string: string, hex?: boolean) => boolean;
    isBase32Hex: (string: string) => boolean;
};
export default _default;
