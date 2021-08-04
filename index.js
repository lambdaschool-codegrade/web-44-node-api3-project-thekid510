// require your server and launch it
const { listen } = require('./api/server.js');
const server = require('./api/server.js');


server.listen(5000, () => {
    console.log('\n*Server running on http://localhost:5000 *\n')
});