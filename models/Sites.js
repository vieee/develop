const db = require("../utils/db");
const bcrypt = require("bcryptjs");

module.exports = class Sites {
  constructor(website_name, username, password) {
    this.website_name = website_name;
    this.password = password;
    this.username = username;
  }

  addUser() {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(this.password, salt);
    // console.log(password);

    return db
      .execute("INSERT INTO users (email, password) VALUES (?, ?)", [
        this.email,
        password,
      ])
      .then((res) => {
        console.log("Inserted User " + this.email);
      })
      .catch((err) => console.error(err));
  }

  static loginUser(email, password) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash("B4c0//", salt, function (err, hash) {
        db.execute("SELECT password FROM users WHERE email = ?", [email]).then(
          ([passwords, set_passwords]) => {
            bcrypt.compare(passwords[0].password);
          }
        );
      });
    });

    const user_password = bcrypt.hashSync(password, salt);
    console.log(user_password);

    return db.execute(
      "UPDATE users SET status = '1' WHERE email = ? AND password = ?",
      [email, user_password]
    );
  }

  static logoutUser(email, password) {
    const salt = bcrypt.genSaltSync(10);
    const user_password = bcrypt.hashSync(password, salt);

    return db.execute(
      "UPDATE users SET status = '0' WHERE email = ? AND password = ?",
      [email, user_password]
    );
  }
};
