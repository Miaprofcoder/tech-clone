const withAuth = async (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(404).render('login');
  }
};

module.exports = withAuth;
