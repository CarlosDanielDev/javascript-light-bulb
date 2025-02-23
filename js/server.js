const express = require('express');
const shortid = require('shortid');
const cors = require('cors');
const app = express();



const port = 3000;

app.use(cors()); 
app.use(express.json());

// Simulação de banco de dados de links encurtados
let urls = {};

// Rota para encurtar a URL
app.post('/encurtar', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ success: false, message: 'URL não fornecida' });
    }

    // Gerar ID único para a URL
    const shortenedId = shortid.generate();
    urls[shortenedId] = url;

    const shortenedUrl = `http://localhost:3000/${shortenedId}`;
    res.json({ success: true, shortenedUrl });
});

// Rota para redirecionar para a URL original
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const originalUrl = urls[id];

    if (!originalUrl) {
        return res.status(404).json({ success: false, message: 'Link não encontrado' });
    }

    res.redirect(originalUrl);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
