import {Log} from '../../../logging-middleware/index.js';
const notifications = [
  {
    id: 1,
    title: "Placement Drive",
    message: "Campus placement registration is open now.",
    type: "unread",
  },
  {
    id: 2,
    title: "Result Published",
    message: "Your aptitude test result has been published.",
    type: "read",
  },
  {
    id: 3,
    title: "Interview Schedule",
    message: "Your technical interview is scheduled for tomorrow.",
    type: "unread",
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

