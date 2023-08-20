import axios from 'axios';

const URl = 'http://localhost:7000';

export const authenticateSignup = async (data) => {
    try{
       return await axios.post (`{$URL}/signup`,data);
    } catch(error){
        console.log("Error while calling sign up api",  error);
    }
}