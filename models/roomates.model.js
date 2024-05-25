import axios from "axios";
import { v4 as uuid } from "uuid";
import path from 'path';

const __dirname = import.meta.dirname

const todos = async() => {
    try{
        const file = await readFile(path.join(__dirname, '../data/roomates.json'))
        const jsonDaata = JSON.parse(file)
        return jsonDaata
    }catch(error) {
        console.log(error)
    }
}


const uno = async(id) => {
    try{
    const file = await readFile(path.join(__dirname, '../data/roomates.json'))
    const jsonData = JSON.parse(file)
    const roomate = jsonData.find(e === id)
    if(!roomate){
        throw {msg: 'El roomate no fue encontrado, por favor intente denuevo'}
    }
    return roomate

}catch (error) {
    console.log(error)
}

}

export const roomatesModel = {
    todos,
    uno,

}