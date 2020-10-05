const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 50
    },
    {
        title: 'Rent',
        budget: 450
    },
    {
        title: 'Groceries',
        budget: 100
    },
    {
        title: 'Clothes',
        budget: 40
    },
    {
        title: 'Bills',
        budget: 80
    },
    {
        title: 'Insurance',
        budget: 30
    },
    {
        title: 'Life',
        budget: 50
    },
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});