const databse = 'BD3-NoSQL-PRODUTOS';
use (databse);
//vendo dados
// db['bd3-nosql-atv7'].find()
// Selecionando valores maior que 700

// db['bd3-nosql-atv7'].find(
//     {
//         valor: {$gt: 700}
//     }
// ).sort({valor:1})

// Selecionando valores menor que 450
// db['bd3-nosql-atv7'].find(
//     {
//         valor: {$lt: 450}
//     }
// ).sort({valor:-1})

// Selecionando valores maiores ou igual que 500
// db['bd3-nosql-atv7'].find(
//     {
//         valor: {$gte: 500}
//     }
// ).sort({valor:1})


// Selecionando valores menores ou igual que 950
db['bd3-nosql-atv7'].find(
    {
        valor: {$lte: 950}
    }
).sort({valor:-1})



