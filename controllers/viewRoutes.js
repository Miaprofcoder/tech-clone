const router = require("express").Router();
const axios = require("axios");
const withAuth = require("../utils/auth");
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
      raw: true,
      nest: true,
    });
    console.log(posts);
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

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User],
      raw: true,
      nest: true,
    });
    const commentData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: [User],
      raw: true,
      nest: true,
    });

    if (postData) {
      // console.log({postData, commentData})
      res.render("post", { postData, commentData });
    } else res.status(404).json({ message: "404 Post not Found" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
