const db = require("../utils/db");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.sites = async (req, res, next) => {
  try {
    const [row] = await db.execute(
      "SELECT website_name FROM sites WHERE website_name=?",
      [req.body.website_name]
    );

    if (row.length > 0) {
      return res.status(201).json({
        message: "The Website already in use",
      });
    }

    const hashPass = await bcrypt.hash(req.body.password, 10);

    const [rows] = await db.execute("INSERT INTO sites VALUES(?,?,?)", [
      req.body.website_name,
      req.body.username,
      hashPass,
    ]);

    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "The website has been successfully inserted.",
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.get_sites = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req.params)
  return db
    .execute("SELECT website_name, password FROM sites WHERE username=?", [
      req.params.username,
    ])
    .then(([vals, set_vals]) => {
      res.json(vals);
    });
};
