const router = require("express").Router();
const { body } = require("express-validator");
const site_controller = require("../controllers/sites");

router.post(
  "/",
  [
    body("website_name", "Should Not Be Empty").notEmpty().trim(),
    body("username", "Should Not Be Empty").notEmpty().trim(),
    body("password", "Should Not Be Empty, min length 3")
      .notEmpty()
      .trim()
      .isLength({ min: 3 }),
  ],
  site_controller.sites
);



router.get(
  "/list/:username",
  
  site_controller.get_sites
);

module.exports = router;
