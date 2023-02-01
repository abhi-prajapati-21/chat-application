import Messages from "../models/Messages.js";

export const messages = async (req,res) => {

  // const { id: _id } = req.params;
  const { message, userName }= req.body;
 
  try {
    const pushMessage = await Messages.create({ message, userName});
    console.log("runingg");
    res.status(200).json(pushMessage);
  } catch (error) {
    res.status(404).json({ message: error.message});
  }
}

// export const allMessages = async (req,res) => {

//   const { id: _id } = req.params;
//   const { message, userName }= req.body;
 
//   try {
//     const pushAllmessages = await user.findByIdAndUpdate(_id, { $addToSet: { 'messages': [{ message, userName}] }}, {new: true} )
//     res.status(200).json(pushAllmessages);
//   } catch (error) {
//     res.status(409).json({ message: error.message});
//   }
 
// }

// export const friendsMessage = async (req,res) => {

//   const { id: _id } = req.params;
//   const friendsMessage  = req.body;

//   try {
//     const pushMessage = await user.findByIdAndUpdate(_id, { $addToSet: { 'messages': [{friendsMessage}] }}, {new: true} )
//     res.status(200).json(pushMessage);
//   } catch (error) {
//     res.status(406).json({ message: error.message});
//   }
// }


