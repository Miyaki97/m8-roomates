import { roomatesModel } from "../models/roomates.model.js";

const unRoomate = async (req, res) => {
    try {
        const roomate = await roomatesModel.todos()
        return res.json(roomate)

    }catch(error){
        console.log(error)
        res.json ({ok: false, error})
    }
}


export const roomatesController = {
    unRoomate,
}