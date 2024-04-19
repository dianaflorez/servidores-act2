const sessions = [];

module.exports.sessions = sessions;

module.exports.checkAuth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split('Bearer')[1];
  console.log(token);
  console.log(sessions);

  const session = sessions.find((x) => x.token === token);
  console.log(session);
  
  if(!session){
    return res.status(401).json({ message: 'unauthorized'});
  }

  next();
}