import mongoose from "mongoose";
import { Schema } from "mongoose";
const convoSchema = new Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
    
  },{timestamps:true});
  
export const Conversation = mongoose.model('Conversation', convoSchema);
  