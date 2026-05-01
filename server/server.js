const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('car marketplace api is runnning...')
});


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});