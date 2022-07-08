 const useModifiedNumbers=(value)=>{
    const stringValue=value.toString()
    const length=stringValue.length;
    if(length>3&&length<=6){
     const first=stringValue.slice(-3);
return stringValue.slice(0,length-3).concat(`,${first}`)
       
    }
    if(length>6){
        const first=stringValue.slice(-3);
        const second=stringValue.slice(-6,-3);
        return stringValue.slice(0,length-6).concat(`,${second}`).concat(`,${first}`)
    }
    return stringValue;
}
export default useModifiedNumbers;