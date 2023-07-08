const router = require("express").Router();
const axios = require("axios");
const withAuth = require("../utils/auth");
const { Post, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [User], raw: true, nest: true });
    console.log(posts)
    res.render("home", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/register", async (req, res) => {
  res.render("register");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const response = await User.findByPk(req.session.userId, {
      include: [Post],
    });
    const posts = response.get({ plain: true });

    console.log(posts);
    res.render("dashboard", posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
