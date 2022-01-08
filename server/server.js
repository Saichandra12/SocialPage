const express = require('express');
const app = express();
const db = require("./models");
const port = process.env.PORT || 4000;
const cors =require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRoute = require('./route/api');
app.use("/api",apiRoute);

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on http://localhost:${port}`);
    })
})