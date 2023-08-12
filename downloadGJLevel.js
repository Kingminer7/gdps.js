const express = require("express");
const router = express.Router();
const db = require("./incl/lib/connection");
const { XORCipher } = require("./incl/lib/ciphers");

// For any GDPS using .php urls
router.get("/downloadGJLevel.php", get);
router.get("/downloadGJLevel19.php", get);
router.get("/downloadGJLevel20.php", get);
router.get("/downloadGJLevel21.php", get);
router.get("/downloadGJLevel22.php", get);

router.post("/downloadGJLevel.php", post);
router.post("/downloadGJLevel19.php", post);
router.post("/downloadGJLevel20.php", post);
router.post("/downloadGJLevel21.php", post);
router.post("/downloadGJLevel22.php", post);

// For any GDPS using .js urls
router.get("/downloadGJLevel.js", get);
router.get("/downloadGJLevel19.js", get);
router.get("/downloadGJLevel20.js", get);
router.get("/downloadGJLevel21.js", get);
router.get("/downloadGJLevel22.js", get);

router.post("/downloadGJLevel.js", post);
router.post("/downloadGJLevel19.js", post);
router.post("/downloadGJLevel20.js", post);
router.post("/downloadGJLevel21.js", post);
router.post("/downloadGJLevel22.js", post);

function get(req, res) {
  res.send(
    'Please go to the dashboard, there is no reason for you to be here...<form action="" method="post">' +
      '<input type="submit" value="Submit">' +
      "</form>"
  );
}

function post(req, res) {
  res.send("-1");
}

module.exports = {
  web: true,
  route: router,
};
