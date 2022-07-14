const useSeperateNumbers=(num=123456789999,seperator=4)=>{
    const numString=num.toString();
const sp=(numString.length)/seperator;
let result=numString.slice(0,seperator);
      for(let i=1;i<sp;i++){
     result=result.concat("*").concat(numString.slice(seperator*i,seperator*(i+1)));
      }
 return result;  
}
export default useSeperateNumbers;