const express = require('express');
const app = express();
const appName = 'template-2';
const outputPath = `${__dirname}/dist/${appname}`;

app.use(express.static(outputPath));
app.get('/*', (req, res) => {
    res.sendFile(`${outputPath}/index.html`);
});
app.listen(process.env.PORT);