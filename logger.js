
module.exports = function logger(request, response, next) {
  var start  = +new Date()
    , stream = process.stdout
    , url    = request.url
    , method = request.method;

  response.on('finish', function() {
    var duration   = +new Date() - start;
      , logMessage = method + ' to ' + url + '\n\ttook' + duration + 'ms\n\n';
      stream.write(logMessage);
  });

  next();
}
