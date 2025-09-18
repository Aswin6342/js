// 📜 Utility functions for decoding

// Base64 decode
function decodeBase64(input) {
  // Ensure input is a string and handle padding
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  // Add missing padding if needed
  const pad = input.length % 4;
  if (pad) input += "=".repeat(4 - pad);
  return Buffer.from(input, "base64").toString("utf8");
}

// Base32 decode
function decodeBase32(input) {
  const base32 = require("hi-base32");
  // Remove spaces and uppercase for standard base32
  const cleanInput = input.replace(/\s+/g, "").toUpperCase();
  return base32.decode.asBytes(cleanInput)
    .map(b => String.fromCharCode(b))
    .join("");
}

// Base58 decode
function decodeBase58(input) {
  const bs58 = require("bs58");
  // Ensure input is a string
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return Buffer.from(bs58.decode(input)).toString("utf8");
}

// Binary to ASCII decode
function decodeBinary(input) {
  return input
    .trim()
    .split(" ")
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}

// 📖 Step runner
function decodeMessage(steps, encoded) {
  let result = encoded;
  console.log(`🔒 Original: ${result}`);

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i].toLowerCase();

    if (step === "base64") result = decodeBase64(result);
    else if (step === "base32") result = decodeBase32(result);
    else if (step === "base58") result = decodeBase58(result);
    else if (step === "binary") result = decodeBinary(result);
    else throw new Error(`Unknown step: ${step}`);

    console.log(`➡️ After ${step}: ${result}`);
  }

  return result;
}

// 🏛 Example usage with CRESTS

// CREST 1: Base64 → Base32
decodeMessage(
  ["base64", "base32"],
  "S0pXRkVVS0pKQkxIVVdTWUpFM0VTUlk9"
);

// CREST 2: Base32 → Base64
decodeMessage(
  ["base32", "base64"],
  "GVFWK5KHK5WTGTCILE4DKY3DNN4GQQRTM5AVCTKE"
);

// CREST 3: Base64 → Binary → Base64
decodeMessage(
  ["base64", "binary", "base64"],
  "MDAxMTAxMTAgMDAxMTAwMTEgMDAxMDAwMDAgMDAxMTAwMTEgMDAxMTAwMTEgMDAxMDAwMDAgMDAxMTAxMDAgMDExMDAxMDAgMDAxMDAwMDAgMDAxMTAwMTEgMDAxMTAxMTAgMDAxMDAwMDAgMDAxMTAxMDAgMDAxMTEwMDEgMDAxMDAwMDAgMDAxMTAxMDAgMDAxMTEwMDAgMDAxMDAwMDAgMDAxMTAxMTAgMDExMDAwMTEgMDAxMDAwMDAgMDAxMTAxMTEgMDAxMTAxMTAgMDAxMDAwMDAgMDAxMTAxMTAgMDAxMTAxMDAgMDAxMDAwMDAgMDAxMTAxMDEgMDAxMTAxMTAgMDAxMDAwMDAgMDAxMTAwMTEgMDAxMTEwMDEgMDAxMDAwMDAgMDAxMTAxMTAgMDExMDAwMDEgMDAxMDAwMDAgMDAxMTAxMDEgMDAxMTEwMDEgMDAxMDAwMDAgMDAxMTAxMDEgMDAxMTAxMTEgMDAxMDAwMDAgMDAxMTAwMTEgMDAxMTAxMDEgMDAxMDAwMDAgMDAxMTAwMTEgMDAxMTAwMDAgMDAxMDAwMDAgMDAxMTAxMDEgMDAxMTEwMDAgMDAxMDAwMDAgMDAxMTAwMTEgMDAxMTAwMTAgMDAxMDAwMDAgMDAxMTAxMTAgMDAxMTEwMDA="
);

// CREST 4: Base58 → Base64
decodeMessage(
  ["base58", "base64"],
  "gSUERauVpvKzRpyPpuYz66JDmRTbJubaoArM6CAQsnVwte6zF9J4GGYyun3k5qM9ma4s"
);