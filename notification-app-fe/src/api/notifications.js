import {Log} from '../../../logging-middleware/index.js';
const notifications = [
  {
    id: 1,
    title: "Assignment Deadline",
    message: "Submit your campus hiring task before the deadline.",
    type: "unread",
  },
  {
    id: 2,
    title: "Interview Update",
    message: "Your technical interview slot has been scheduled.",
    type: "read",
  },
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

    //here in this file read / unread type but it is checking filter for placement ,result ,evenet i caN be reason why it is not showing list in web 

