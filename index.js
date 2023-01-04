import baseX from '@vandeurenglenn/base-x';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const ALPHABET_HEX = '0123456789ABCDEFGHIJKLMNOPQRSTUV';
const base32 = baseX(ALPHABET);
const base32Hex = baseX(ALPHABET_HEX);
const decode = base32.decode;
const decodeHex = base32Hex.decode;
const encode = base32.encode;
const encodeHex = base32Hex.encode;
const isBase32 = (string, hex = false) => {
    try {
        if (hex)
            decodeHex(string);
        else
            decode(string);
        return true;
    }
    catch (e) {
        return false;
    }
};
const isBase32Hex = (string) => {
    return isBase32(string, true);
};
var index = {
    encode,
    decode,
    encodeHex,
    decodeHex,
    isBase32,
    isBase32Hex
};

export { decode, decodeHex, index as default, encode, encodeHex, isBase32, isBase32Hex };
