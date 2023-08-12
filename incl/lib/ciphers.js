xor = {
  cipher(plaintext, key) {
    var ord = [];
    var buf = "";

    for (z = 1; z <= 255; z++) {
      ord[String.fromCharCode(z)] = z;
    }

    for (j = z = 0; z < plaintext.length; z++) {
      buf += String.fromCharCode(
        ord[plaintext.substr(z, 1)] ^ ord[key.substr(j, 1)]
      );
      j = j < key.length ? j + 1 : 0;
    }

    return buf;
  }
}

module.exports = {
  XORCipher: xor,
};