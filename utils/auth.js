const withAuth = async (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(404).json({ message: "Not Logged In!" });
  }
};

module.exports = withAuth;
