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

    res.status(200).json({ message: "Post created!", response });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(
      { title: req.body.title, content: req.body.content },
      { where: { id: req.params.id } }
    );

    if (updatedPost) {
      res.status(200).json(updatedPost);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({ where: { id: req.params.id } });

    if (deletedPost) {
      res.status(200).json({ message: "Post deleted!" });
    } else res.status(404).json({ message: "404: Post id not valid!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
