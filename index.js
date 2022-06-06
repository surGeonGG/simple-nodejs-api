const express = require('express');
const app = express();
const PORT = 8080;

// Turns body of request into json
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
)

app.get('/bible', (req, res) => {
    res.status(200).send(
        {version: 'KJV'}
    )
})

app.post('/echo/:id', (req, res) => {
    
    const { id } = req.params
    const { msg } = req.body
    
    if (!msg) {
        res.status(418).send({
            message: 'msg required'          
        })
    }

    res.status(200).send(
        {
            'id': id,
            'msg': msg
        }
    )
})