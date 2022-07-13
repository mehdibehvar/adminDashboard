import Navbar from "./navbar/Navbar";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
  <>
  <Sidebar/>
  <main  className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <Navbar/>
    {children}
  </main>
  </>
  )
}
