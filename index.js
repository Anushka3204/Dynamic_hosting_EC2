
const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Anushka Shahane</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #f4f4f4;
                    }
                    h1 {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>Hello, I am Anushka Shahane.This is Dynamic hosting using EC2 instance</h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port 3000 `);
});
