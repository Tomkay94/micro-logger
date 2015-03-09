# micro-logger

A minimalist, light-weight logger middle-ware that outputs request information to standard output.


### Usage
To use micro-logger in your application:
 1. `cd` to your project's root
 2. Run `npm install micro-logger` to download the module.
 3. In an `Express` application, you can include the micro-logger using the following setup:

    ```
    var express = require('express');
    var app = express();

    var microLogger = require('micro-logger');
    app.use(microLogger);`
    ```
