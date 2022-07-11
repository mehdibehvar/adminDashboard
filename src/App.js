import  { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/profile/profile";
import Billing from "./pages/billing/Billing";
import Notifications from "./pages/notifications/Notifications";
import Tables from "./pages/tables/Tables";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleSetting } from "./features/style/StyleSlice";
function App() {

  useEffect(() => {
 document.body.classList.add("g-sidenav-show","bg-gray-200");
  }, [])
  

  return (
<BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path=":fullName" element={<Profile />} />
          <Route path="billing" element={<Billing/>}/>
          <Route path="notifications" element={<Notifications/>} />
          <Route path="tables" element={<Tables/>} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
