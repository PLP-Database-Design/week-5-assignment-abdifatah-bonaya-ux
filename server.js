const express = require('express');
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv');

//configure environment variables
dotenv.config();

//create connection
const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});


//test connection
db.connect((err)=>{
    //if connetion fails
    if (err){
        console.log('error connecting to database',err)
    }
    //if connection is successful
    console.log('Successfully connected to mysql',db.threadId)
})

/*question 1 retrieve all patients
app.get('',(req,res)=>{
    const getPatient='SELECT patient_id,first_name,last_name,date_of_birth FROM patients'
    db.query(getPatient,(err,data)=>{
        //failed to fetch
        if (err){
            return res.status(400).send('Failed to get patient')
        }
        //successful
        res.status(200).send(data)
    })
})*/

/*question 2 retrieve all providers
app.get('',(req,res)=>{
    const getProvider='SELECT first_name,last_name,provider_specialty FROM providers'
    db.query(getProvider,(err,data)=>{
        //failed to fetch
        if (err){
            return res.status(400).send('Failed to get patient')
        }
        //successful
        res.status(200).send(data)
    })
})*/

/*question 3 filtering patients by first_name
app.get('',(req,res)=>{
    const getProvider='SELECT * FROM patients ORDER BY first_name'
    db.query(getProvider,(err,data)=>{
        //failed to fetch
        if (err){
            return res.status(400).send('Failed to get patient')
        }
        //successful
        res.status(200).send(data)
    })
})*/

//question 4 retrieving all providers by their specialty
app.get('',(req,res)=>{
    const getProvider='SELECT provider_id,provider_specialty FROM providers'
    db.query(getProvider,(err,data)=>{
        //failed to fetch
        if (err){
            return res.status(400).send('Failed to get patient')
        }
        //successful
        res.status(200).send(data)
    })
})

//const PORT = 3000
app.listen(3300, () => {
    console.log(`server is runnig on 3300`)
  })
