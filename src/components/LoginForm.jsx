import {Link,useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import { useDispatch,useSelector } from "react-redux";
import { loginError, loginRequest, loginSuccess } from "../features/users/userSlice";
import { post } from "../utils/httpclient";
import Loading from "./status/Loading";
import Error from "./status/Error";
import { useRef } from 'react';
import handleStyle from "../customHooks/useHandleInputsStyle";
  export default function LoginForm() {
  const {error}=useSelector(state=>state.userInfo)
    const {register,handleSubmit,formState:{errors}}=useForm();
    const inputRefEmail=useRef();
    const inputRefPassword=useRef();
    const dispatch=useDispatch();
    const {loading}=useSelector(state=>state.userInfo);
    const navigate=useNavigate();
    ////handle login function/////
    const handleLogin=async (inputs)=>{
     const {email,password}=inputs;
     dispatch(loginRequest())
      try {
        const response=await post("https://demo.treblle.com/api/v1/auth/login",{email,password});
       
        if(response.user){
          dispatch(loginSuccess(response.user));
          navigate("/",{replace:true});
        }
       
      } catch (error) {
      dispatch(loginError('The password must be at least 5 characters.'))
      }
    };

    if(error){
      return <Error error={error}/>
    }
  return (
 <>   {loading?<Loading customStyle={"signin-loader"}/>:<form onSubmit={handleSubmit(handleLogin)}  className="text-start">
 <div ref={inputRefEmail} className="input-group input-group-outline my-3">
   <label className="form-label" htmlFor="emailId">Email</label>
   <input id="emailId"  onChange={(e)=>handleStyle(e,inputRefEmail)} onBlur={(e)=>handleStyle(e,inputRefEmail)}  onFocus={(e)=>handleStyle(e,inputRefEmail)} {...register("email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} className="form-control"/>
   <span className="text-danger ">{errors.email?.type==="required"&& "email is required"}</span>
   <span className="text-danger ">{errors.email?.type==="pattern"&& "email format is wrong"}</span>
 </div>
 <div ref={inputRefPassword} className="input-group input-group-outline mb-3">
   <label className="form-label">Password</label>
   <input data-testid="passinput" onChange={(e)=>handleStyle(e,inputRefPassword)} onBlur={(e)=>handleStyle(e,inputRefPassword)}  onFocus={(e)=>handleStyle(e,inputRefPassword)} {...register("password",{required:true})} className="form-control"/>
<span className="text-danger">{errors.password?.type==="required"&& "password is neccessary"}</span>
 </div>
 <div className="form-check form-switch d-flex align-items-center mb-3">

   <input {...register("checkInput")} type="checkbox" id="rememberMe"/>
   <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
 </div>
 <div className="text-center">
   <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
 </div>
 <p className="mt-4 text-sm text-center">
   Don't have an account?
   <Link to="/signup" className="text-primary text-gradient font-weight-bold">
   Sign up
   </Link>
 </p>
</form>}</>
  
  )
}
