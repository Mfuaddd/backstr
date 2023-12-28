export const createLog = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  res.on("finish", function() {
    console.log(new Date(Date.now()),req.method, decodeURI(req.url), res.statusCode, res.statusMessage,ip);
  });
  next();
};