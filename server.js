import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
const port = process.env.PORT || 8080
const __dirname = path.resolve();

const app = express();
console.log(__dirname)
app.use(favicon(__dirname + '/build/favicon.svg'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', (req, res) => {
	return res.send('test');
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port)