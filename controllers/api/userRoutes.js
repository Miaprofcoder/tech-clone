const router = require("express").Router();
const { User } = require("../../models");

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "Invalid username or password!" });
    }

    const validPw = user.checkpassword(req.body.password);

    if (!validPw) {
      res.status(400).json({ message: "Invalid username or password!" });
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.status(200).json({ user, message: "Logged In!" });
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/auth", (req, res) => {
  if (req.session.loggedIn) {
    const username = req.session.username;
    res.status(200).json({ message: "Logged In", username });
  } else {
    res.status(404).json({ message: "Not Logged In!" });
  }
});

module.exports = router;
