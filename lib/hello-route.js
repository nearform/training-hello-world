function get(req, res) {
  console.log(req);
  res.send('Hello World!')
};

exports.get = get;
