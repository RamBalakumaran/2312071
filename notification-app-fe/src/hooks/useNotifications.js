import { useState, useEffect } from "react";
import { fetchNotifications } from "../apis/notifications";
import {Log} from '../../../logging-middleware/index.js';

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages,setTotalPages]=useState(0);
  const [loading,setLoading] = useState(false);
  const [error,setError]=useState("");
  useEffect(() => {
    const load = async () => {
      const data = await fetchNotifications();
      setNotifications(data.notifications ?? []);
    };

    load();
  }, [notifications]);

  const totalPages = 0;

  return { notifications, total, totalPages, loading: false, error: true };
}
