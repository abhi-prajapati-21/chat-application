
import user from '../models/user.js';


export const signup = async (req,res) => {
 
    const {name, email, password} = req.body;
    //  console.log({name, email, password});
     
   try {
       const newUser = await user.create({name, email, password})
       res.status(200).json({ result: newUser});
   } catch (error) {
    res.status(500).json("Something went worng...");
   }

}

export const login = async (req,res) => {
 
    const {email, password} = req.body;
    
     
   try {
      
      
      
    res.status(200).json({ result: email});
   } catch (error) {
    res.status(500).json("Something went worng...")
   }

}