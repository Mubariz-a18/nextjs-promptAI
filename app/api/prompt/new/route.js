import { connectToDB } from "@utils/connectDB";
import Prompt from "@models/prompt";

export const POST = async(req,res)=>{
    try{
        const {  userId , prompt, tag} =await req.json();
        await connectToDB();
        const newPrompt = await Prompt.create({
            creator:userId,
            tag,
            prompt
        })

        return new Response(JSON.stringify(newPrompt),{
            status:201
        })
    }catch(e){
        console.log(e);
        return new Response("failed to create a new Prompt",{
            status:500
        })
    }
}