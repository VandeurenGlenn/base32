import base32 from "./index.js";
import test from "node:test";
import assert from "node:assert";

const uint8Array = new TextEncoder().encode("hi");

test("base32 encoding", () => {
  const base32Encoded = base32.encode(uint8Array);
  const base32HexEncoded = base32.encodeHex(uint8Array);

  assert.ok(base32Encoded.length === 3, "can encode");
  assert.ok(base32HexEncoded.length === 3, "can encode hex");
});

test("base32 decoding", () => {
  const base32Encoded = base32.encode(uint8Array);
  const base32HexEncoded = base32.encodeHex(uint8Array);

  const base32Decoded = base32.decode(base32Encoded);
  const base32HexDecoded = base32.decodeHex(base32HexEncoded, true);

  const string = new TextDecoder().decode(base32Decoded);
  const stringHex = new TextDecoder().decode(base32HexDecoded);

  assert.ok(string === "hi", "can decode");
  assert.ok(stringHex === "hi", "can decode hex");
});

test("base32 validation", () => {
  assert.equal(base32.isBase32(""), true);
  assert.equal(base32.isBase32("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), true);
  assert.equal(base32.isBase32("AB\n"), false);
  assert.equal(base32.isBase32("01"), false);
  assert.equal(base32.isBase32(null), false);
  assert.equal(base32.isBase32Hex("0123456789ABCDEFGHIJKLMNOPQRSTUV"), true);
  assert.equal(base32.isBase32Hex("W"), false);
});
