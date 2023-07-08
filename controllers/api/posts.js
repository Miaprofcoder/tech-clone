const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/create", withAuth, async (req, res) => {
  try {
    const response = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });

    res.status(200).json({message: "Post created!", response})
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
