
/* Logs request information to the console. */

module.exports = function(request, response, next) {
  var start  = +new Date()
    , stream = process.stdout
    , url    = request.url
    , method = request.method;

  response.on('finish', function() {
    var duration   = +new Date() - start
      , logMessage = '[ ' + duration + ' ms ] ' + method + ' to ' + url + '\n\n';
    stream.write(logMessage);
  });

  next();
}
