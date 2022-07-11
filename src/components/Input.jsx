import {useForm} from "react-hook-form"



export default function Input({type,required,pattern,className,label,inputType,lableClass}) {
    const {register,formState:{errors}}=useForm();
  return (
    <div className={`input-group input-group-outline ${className}`}>
   <label className="form-label">{label}</label>
   <input {...register(type,{required:required,pattern:pattern})} type={inputType} className="form-control"/>
   <span className="text-danger ">{errors.type?.type==="required"&& `"${type} is neccessary"`}</span>
   <span className="text-danger ">{errors.type?.type==="pattern"&& `"${type} format is wrong"`}</span>
 </div>
  )
}
