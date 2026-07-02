import {Log} from '../../../logging-middleware/index.js';
const notification =[
    {id:1,title: "Assignment Deadline",message:"submit your task within deadline",type:"uread",},
    {id:2,title: "Interview Update",message:"interview time scheduled",type:"read",},
    {id:3,title: "Notification service",message:"Notification service is running",type:"unread",}

];
export async function fetchNotifications(filter="all",page=1) {
    await Log("frontend","info","api",`fetch notification ${page}`);

    try{
        let filterNotify = notifications;
        if(filter !== "all"){
            filterNotify = notifications.filter((notification)=>notification.type === filter);
        }
        await Log("frontend","info","api","fetch notification filtered");
        
        return {
      notifications: filterNotify,
      total: filterNotify.length,
      totalPages: 1,
        }
    }catch(error){
        await Log("frontend","error","api","failed to fetch notifications");
        throw error;
    }

    }
