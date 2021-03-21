const express = require('express');
const	port = process.env.PORT || 8000;
	
express().use(express.static('build'))
    .get('*', (req, res) => res.sendFile(__dirname + '/build/index.html'))
    .listen(port, () => console.log(`Starting server. Listening on ${ port }`));