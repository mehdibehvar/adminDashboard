import { useForm } from "react-hook-form";
import StickyNavbar from "../../components/StickyNavbar";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { loginError, loginRequest, loginSuccess } from "../../features/users/userSlice";
import { post } from "../../utils/httpclient";
import Loading from "../../components/status/Loading";
export default function SignUp() {
  const {loading}=useSelector(state=>state.userInfo)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {register,handleSubmit,formState:{errors}}=useForm();
  const handleSignUp=async (inputs)=>{
    const{fullName,email,password}=inputs;
    const projects=[1,4,2,6];
     dispatch(loginRequest());
     try {
      const response=await post("users",{fullName,email,password,projects});
      dispatch(loginSuccess(response));
       navigate("/",{replace:true});
     } catch (error) {
      dispatch(loginError(error));
     }
  }
  return (
    <>
    <StickyNavbar/>
      <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{backgroundImage: `url(${'../assets/img/illustrations/illustration-signup.jpg'})`, backgroundSize: "cover"}}>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div className="card card-plain">
                <div className="card-header">
                  <h4 className="font-weight-bolder">Sign Up</h4>
                  <p className="mb-0">Enter your email and password to register</p>
                </div>
                <div className="card-body">
                  {loading?<Loading customStyle={"signin-loader"}/>:<><form onSubmit={handleSubmit(handleSignUp)}>
                      <span className="text-danger m-0">{errors.fullName?.type==="required"&&"name is neccessary"}</span>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">fullName</label>
                      <input {...register("fullName",{required:true})} type="text" className="form-control"/>
                    </div>
                    <span className="text-danger m-0">{errors.email?.type==="required"&&"email is neccessary"}</span>
                    <span className="text-danger m-0">{errors.email?.type==="pattern"&&"email pattern is wrong"}</span>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Email</label>
                      <input {...register("email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  className="form-control"/>
                    </div>
                    <span className="text-danger m-0">{errors.password?.type==="minLength"&&"password not strong"}</span>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Password</label>
                      <input {...register("password",{required:true,minLength:5})} type="password" className="form-control"/>
                    </div>
                    <div className="form-check form-check-info text-start ps-0">
                      <input {...register("checkbox")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree the <Link to="/" className="text-dark font-weight-bolder">Terms and Conditions</Link>
                      </label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                    </div>
                  </form></>}
                 
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-2 text-sm mx-auto">
                    Already have an account?
                   <Link to="/signin" className="text-primary text-gradient font-weight-bold">Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  )
}
