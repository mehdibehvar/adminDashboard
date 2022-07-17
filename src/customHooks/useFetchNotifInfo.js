import { useEffect, useState } from "react";
import { get } from "../utils/httpclient";

const useFetchNotifInfo=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
    get(url)
      .then(res=>{
        setData(res)
        setLoading(false)
      });
    },[url]);
    return [data,loading];
}
export default useFetchNotifInfo;