const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./posts");
const commentRoutes = require('./comments')

router.use("/user", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
