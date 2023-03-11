require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./userSc');

mongoose.set('debug', true)
mongoose.set('strictQuery', false)

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{

    res.send("Helo World")
})

mongoose.connect(process.env.DB_CONN)
.then(()=> console.log('Database Connected...'))
.catch(err => console.log(err))

app.post('/post', async(req, res) =>{

    console.log(req.body);
    
    const formName = req.body.formName;
    const formPhone = req.body.formPhone;
    const formEmail = req.body.formEmail;
    const formDesignation = req.body.formDesignation;
    const formCompany = req.body.formCompany;
    const formInfo = req.body.formInfo;
    const formInterestLevel = req.body.formInterestLevel;

    try {
        const result = await User.create({
            "name": formName,
            "phone": formPhone,
            "email": formEmail,
            "designation": formDesignation,
            "company": formCompany,
            "info": formInfo,
            "interest" : formInterestLevel,

        })  
        res.send(req.body);
        const newUser = new User(result);
        newUser.save();

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
});

app.get('/data', async(req, res) => {
    try {
        const allData = await User.find({}).sort('-date');
        res.send({allData});
    } catch (err) {
        res.json(err);
    }
})

app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
})