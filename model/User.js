const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const user =new  mongoose.Schema({     
    name: {
        type: String,
        require:true,
        trim: true
    },
    address:{
            type: String,
            trim: true
        },  
    phone :{
            type: String,
            require:true,
            trim: true
        },
    gender :{
            type: String,
            require:true,
            trim: true
        },     
    dob :{
            type: String,
            require:true,
            trim: true
        },
    email :{
            type: String,
            require:true,
            trim: true
        },  
    password :{
            type: String,
            require:true,
            trim: true
        },  
    tokens:[{
        token:{
            type:String,
        }
    }]     
    
  });
 
  
  user.statics.checkCrediantialsDb = async(email,password)=>{
      const userCheck = await users.findOne({email:email, password:password})
      return userCheck
  }

  
  user.methods.generateAuthToken = async function () {
    const userAuth = this
   const token = jwt.sign({ _id: userAuth._id.toString() }, 'thisismynewcourse')
   
   console.log(token);
   userAuth.tokens = userAuth.tokens.concat({ token :token })
    await userAuth.save()
    return token
   }

   const users = mongoose.model('User',user)
  module.exports = users