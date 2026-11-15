import baseX from "@vandeurenglenn/base-x";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const ALPHABET_HEX = "0123456789ABCDEFGHIJKLMNOPQRSTUV";
const base32 = baseX(ALPHABET);
const base32Hex = baseX(ALPHABET_HEX);
export const decode = base32.decode;
export const decodeHex = base32Hex.decode;
export const encode = base32.encode;
export const encodeHex = base32Hex.encode;
export const isBase32 = (string, hex = false) => {
    if (typeof string !== "string")
        return false;
    for (let i = 0; i < string.length; i++) {
        const character = string.charCodeAt(i);
        if (hex
            ? !((character >= 48 && character <= 57) || (character >= 65 && character <= 86))
            : !((character >= 65 && character <= 90) || (character >= 50 && character <= 55))) {
            return false;
        }
    }
    return true;
};
export const isBase32Hex = (string) => {
    return isBase32(string, true);
};
export default {
    encode,
    decode,
    encodeHex,
    decodeHex,
    isBase32,
    isBase32Hex,
};
