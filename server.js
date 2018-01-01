const express = require('express');
const app = express();



app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstname: 'Marko', lastname: 'Mallila'},
        {id: 2, firstname: 'Mikko', lastname: 'Mallikas'},
        {id: 3, firstname: 'Pentti', lastname: 'Mallinen'},
    ];
    res.json(customers);
});



const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));