const express = require('express')
const route = express.Router()
let accounts = require('./database')


// GET request
route.get('/accounts',(req,res) => {
    res.json({userDate : accounts});
})

//   POST request
route.post('/accounts', (req,res) => {
    const incomingAccount= req.body
    accounts.push(incomingAccount);
    res.json(accounts);
});

// GET (single get by id)  request
route.get('/accounts/:id',(req,res) => {
    const accountid = Number(req.params.id);
    const getAccount = accounts.find((account) => account.id === accountid)

    if(!getAccount){
        res.status(500).send('Account not found');
    }else(
        res.json({userData:[getAccount]})
    )
})

// PUT request 
route.put('/accounts/:id',(req,res) => {
    const accountid = Number(req.params.id);
    const body = req.body;
    const account = accounts.find((account) => account.id === accountid);
    const index = accounts.indexOf(account)

    if(!account){
        res.status(500).send('Account not found')
    }else{
        const updatedAccount = {...account,...body}
        // console.log({ ...account, ...body});
        accounts[index] = updatedAccount
        res.send(updatedAccount);
    }
});

// DELETE request 
route.delete('/accounts/:id',(req,res) => {
    const accountid = Number(req.params.id);
    const newAccounts = accounts.filter((account) => account.id != accountid);

    if(!newAccounts){
        res.status(500).send('Account not found')
    }else{
      accounts = newAccounts;
      res.send(newAccounts);
    }
})



module.exports = route;

