const http = require("http");
const server = http.createServer((req, res)=>{
	res.end("hello node world");
});
server.listen(3000, () => {
	console.log(`Server is notnot running`);
})