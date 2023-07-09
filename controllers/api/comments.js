const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/create", withAuth, async (req, res) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.userId,
    });

    res.status(200).json({message: 'Comment created!', comment})
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
