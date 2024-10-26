const userSchema = require('../model/userModel')

const registerUser = async (req,res) =>{

    try{

        const {email, password} = req.body

        const user = await userSchema.findOne({email})

        if(user) return res.render('user/register', {message: "User already exists"})


        const newUser = new userSchema({

            email,
            password

        })

        await newUser.save()

        res.render('user/login',{message: "User created successfully"})

    }

    catch(error){

    }
}

module.exports = {registerUser}