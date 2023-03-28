require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./userSc');
let multer = require('multer')
const path = require('path')

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

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  })
  
  var upload = multer({ storage: storage });


app.post('/post', upload.single('photo'), async(req, res) =>{

    // upload(req, res, (err)=>{
    //     if(err) {
    //         console.log(err)
    //     }else {
    //         const newImage = new User()
    //     }
    //  })

    // console.log(req.body);
    
    const formName = req.body.formName;
    const formPhone = req.body.formPhone;
    const formEmail = req.body.formEmail;
    const formDesignation = req.body.formDesignation;
    const formCompany = req.body.formCompany;
    const formInfo = req.body.formInfo;
    const formInterestLebel = req.body.formInterestLebel;
    // const formVisitingCard = req.body.formVisitingCard;

    try {
        // console.log(req.body)

        const result = await User.create({
            "name": formName,
            "phone": formPhone,
            "email": formEmail,
            "designation": formDesignation,
            "company": formCompany,
            "info": formInfo,
            "interest" : formInterestLebel,
            "image" : req.file.filename,
        })
        

        res.send(req.body);
        const newUser = new User(result);
        newUser.save();

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
});

app.get('/image/:filename', (req, res)=>{
    const filename = req.params.filename;
    const uploadForlder = './uploads';
    const filepath = path.resolve(path.join(uploadForlder, filename))

    res.sendFile(filepath)
})


app.get('/customer/:id', async(req, res) => {

    try{
        const oneData = await User.findById(req.params.id)
        res.send(oneData);
    }catch(err){
        res.status(404).send(err)
    }
})

app.get('/data', async(req, res) => {
    try {
        const allData = await User.find({}).sort('-date');
        res.send({allData});
    } catch (err) {
        res.json(err);
    }
})

app.post('/customer/:id', upload.single('photo'), async(req, res)=> {

    const formName = req.body.formName;
    const formPhone = req.body.formPhone;
    const formEmail = req.body.formEmail;
    const formDesignation = req.body.formDesignation;
    const formCompany = req.body.formCompany;
    const formInfo = req.body.formInfo;
    const formInterestLebel = req.body.formInterestLebel;
    console.log(req.body)

    try {
        const oneData = await User.findById(req.params.id)
        oneData.name = formName;
        oneData.phone = formPhone;
        oneData.email = formEmail;
        oneData.designation = formDesignation;
        oneData.company = formCompany;
        oneData.info = formInfo;
        oneData.interest = formInterestLebel;
        
        if(req.file && req.file.filename) {
            oneData.image = req.file.filename;
        }

        await oneData.save()
        res.send(oneData)
    } catch (err) {
       res.status(404).send(err) 
    }
})

app.delete('/customer/:id', async(req, res)=> {
    const id = req.params.id;
    try{
        await User.findByIdAndRemove(id)
        res.send('Success')
    }catch(err){
        res.status(404).send(err)
    }
})



app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
})