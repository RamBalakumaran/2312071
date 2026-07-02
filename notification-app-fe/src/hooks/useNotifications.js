import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import {Log} from '../../../logging-middleware/index.js';

export function useNotifications(filter = "all", page = 1) {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages,setTotalPages]=useState(0);
  const [loading,setLoading] = useState(false);
  const [error,setError]=useState("");
  useEffect(() => {
     const load = async () => {
    setLoading(true);
    setError("");
    await Log("frontend","info","hooks","fetching notifications");
    
    try{
      const data=await fetchNotifications(filter,page);
      setNotifications(data.notifications ?? []);
      setTotalPages(data.totalPages ?? 0);;

      if((data.notifications ??[].length)===0){
        await Log("frontend", "warn", "hook", "No notifications found");
      }
    }catch(error){
      setError("Failed to fetch notifications");
      await Log("frontend","error","hook","failed to fetch notifications");
    }finally{
      setLoading(false);
    }
  load();
     };
  }, [filter,page]);

  return { notifications, total, totalPages, loading ,error };
}
