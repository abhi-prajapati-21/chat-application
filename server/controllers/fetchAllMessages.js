import Messages from "../models/Messages.js";

export const fetchAllMessages = async (req, res) => {
    
    try {
       const getAllMessages = await Messages.find();
       res.status(200).json(getAllMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}