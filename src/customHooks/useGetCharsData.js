import { useEffect, useState } from "react"
import { get } from "../utils/httpclient";

const useGetChartsData=(type)=>{
    const [data,setData]=useState({});
    const [loading,setLoading]=useState(false);

useEffect(()=>{
    setLoading(true)
    get(`charts/?type=${type}`).then(response=>{
        const data=response[0];
        setData(data.data);
    });
    setLoading(false);
},[type]);

return {data,loading}
};
export default useGetChartsData;