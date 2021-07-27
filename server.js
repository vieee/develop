const express = require("express");
const site_router = require("./routes/site");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// app.post("/login", user_controller.login);
// app.post("/signup", user_controller.signup);
// app.post("/logout", user_controller.logout);

app.use("/sites", site_router);

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to our app !",
  });
});

app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  //   db.execute("SELECT * FROM notes")
  //     .then((res) => console.log(res[0]))
  //     .catch((err) => console.log(err));
});
