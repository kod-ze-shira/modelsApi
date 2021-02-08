const express = require('express');
const app = express();
const apiRouter=require('./routes/api')
const fs = require('fs')
const path = require('path')
const viewsRouter=require('./routes/views')


// app.use('/api',apiRouter)
// app.use('/*',viewsRouter)


// app.listen(4002, () => {
//     console.log("server is up");
// });