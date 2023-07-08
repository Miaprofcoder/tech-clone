const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/register", async (req, res) => {
  res.render("register");
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.render("login");
  }
  res.render("dashboard");
});

module.exports = router;
