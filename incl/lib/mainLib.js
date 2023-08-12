const texts = require("../../config/texts.js");

module.exports = {
  getAudioTrack: function (id) {
    if (id < 0 || id >= count(texts.Songs))
      return texts.DefaultSong + " by " + texts.DefaultAuthor;
    return texts.Songs[id] + " by " + texts.Authors[id];
  },
  getDifficulty: function (id) {
    
  }
};
