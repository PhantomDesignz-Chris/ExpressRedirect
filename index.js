const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.redirect(307, 'https://discord.gg/tsVW9SXVY6')
});

app.listen(8080);
console.log('Server is listening on port 8080');