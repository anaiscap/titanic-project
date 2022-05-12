export default (req, res) => {
  console.log(req.session)
  const val = req.session.login;
  res.render('home/index', {user:val});
};
