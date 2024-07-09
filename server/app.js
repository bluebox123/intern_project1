


const express = require('express');
const User = require('./config');
const cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// app.get("/",async(req,res)=> {
//     const snapshot=await User.get();
//     const list=snapshot.docs.map((doc)=>({id:doc.id , ...doc.data()}));
//     res.send(list);
// })

app.post("/create", async (req, res) => {
    try {
        const data = req.body;
        console.log(req.body);
        await User.add(data);
        res.status(201).send({
            message: "User added successfully"
        });
        console.log('user added successfuly');
    } catch (err) {
        console.error('Error adding user:', err.message);
        res.status(500).send({
            message: "Internal Server Error"
        });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log('Listening on port 3000...');
});
