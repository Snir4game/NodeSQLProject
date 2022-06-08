import exp from 'express';
const router = exp.Router();
import bcrypt from 'bcryptjs';
import account from '../Models/account.js';



router.get('/getData',(req,res)=>{
    
    return res.status(200).json({
        message:'hello from API server'
    })
    
});

router.post('/login',(req,res)=>{
    //option one
    const {email,pass,full_name}=req.body;

    console.log(req);

    return res.status(200).json({
        message:`Hello ${full_name} your email is ${email}`
    })
    //option two

});

router.post('/signup',()=>{});



router.post('/register',async(req,res) =>{
    //get user data
    const {firstname,lastname,email,password}= req.body;
    //chack if email exist in db
    const acc = await account.findAll({where: {email: email}});
    if(acc.length >0){
    return res.status(200).json({
        message:'Account is not avilable'

    });
}
    else{
        // crypt the passwordf
        const hash_pass = await bcrypt.hash(password,10);
        // generate verify code
        const code=generateRandomIntegerInRange(1111,9999);
        // save user in db
        account.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hash_pass,
            passcode:code
        })
      .then(account_created =>{
          return res.status(200).json({
              results: account_created
          });
      })
      .catch(error => {
          return res.status(500).json({
              results: error
          });
      })

    }
})

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default router;
