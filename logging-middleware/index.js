const Log_API_URL="http://4.224.186.213/evaluation-services/logs";
export async function Log(stack,level,packageName,message){
    try{
        const responce=await fetch(Log_API_URI,{
            method:"POST",
            headers:{
                "content-Type":"application/json",
                Authorization: `Bearer ${import.meta.env.VITE_LOG_TOKEN}`,

            },
            body:Json.strinfy({
                stack,level,package: packageName,message
            }),
        });
        return await responce.json();
    }catch(error){
        console.log("logging failed :",error);
        return null;
    }
}