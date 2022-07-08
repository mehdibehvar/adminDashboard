import {Link,useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import { useDispatch,useSelector } from "react-redux";
import { loginError, loginRequest, loginSuccess } from "../features/users/userSlice";
import { post } from "../utils/httpclient";
export default function LoginForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const dispatch=useDispatch();
    const {loading}=useSelector(state=>state.userInfo);
    const navigate=useNavigate();
    const handleLogin=async (inputs)=>{
     const {email,password}=inputs;
     dispatch(loginRequest())
      try {
        const response=await post("https://demo.treblle.com/api/v1/auth/login",{email,password});
        dispatch(loginSuccess(response.user));
        navigate("/",{replace:true});
      } catch (error) {
      dispatch(loginError(error))
      }
    }
  return (
 <>   {loading?<p>loading....</p>:<form onSubmit={handleSubmit(handleLogin)}  className="text-start">
 <div className="input-group input-group-outline my-3">
   <label className="form-label">Email</label>
   <input {...register("email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} className="form-control"/>
   <span className="text-danger ">{errors.email?.type==="required"&& "email is required"}</span>
   <span className="text-danger ">{errors.email?.type==="pattern"&& "email format is wrong"}</span>
 </div>
 <div className="input-group input-group-outline mb-3">
   <label className="form-label">Password</label>
   <input {...register("password",{required:true})} className="form-control"/>
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
