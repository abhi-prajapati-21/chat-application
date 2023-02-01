import user from "../models/user.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await user.find();
        const allUsersDetails = [];
        allUsers.forEach(user => {
            allUsersDetails.push({ _id: user._id, name: user.name, password: user.password, messages: user.messages ,friendsMessage: user.friendsMessage, joinedOn: user.joinedOn});
        })
        res.status(200).json(allUsersDetails);
    } catch (error) {
        res.status(405).json({message: error.message});
    }
}