const express = require('express')
const cors = require('cors')
const app =express();
const port = 5000;

app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('hellow from node express qww 123 123 123');
});

const users=[{id:1,name:"sabana",email:"sabaan@gmail.com"},
{id:2,name:"purnima",email:"purnima@gmail.com"},
{id:3,name:"saba",email:"san@gmail.com"},
{id:4,name:"saana",email:"saaan@gmail.com"},
{id:5,name:"suaa",email:"suaan@gmail.com"}]


app.post('/users',(req,res)=>{
    //console.log('hitted',req.body);
    const user = req.body;
    user.id= users.length;
    //console.log(user);
    users.push(user);
    console.log(users);
    //show in ui -->front end
    res.send(users)
})
/*
app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/users/:id',(req,res)=>{
    const requestedId = req.params.id;
    const requestedUser = users[requestedId];
    res.send(requestedUser);
})
*/
//search use query parameter
app.get('/users',(req,res)=>{
    console.log(req.query);
    const search = req.query.search;
    if(search){
        const result=users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(result);
    }
    else{
        res.send(users)
    }
})



app.listen(port,()=>{
    console.log('listening from', port);

})