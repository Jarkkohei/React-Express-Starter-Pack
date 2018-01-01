const express = require('express');
const app = express();



app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Marko', lastName: 'Mallila'},
        {id: 2, firstName: 'Mikko', lastName: 'Mallikas'},
        {id: 3, firstName: 'Pentti', lastName: 'Mallinen'},
    ];
    res.json(customers);
});



const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));