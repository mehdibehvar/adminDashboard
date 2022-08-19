import SidebarLink from "../components/SidebarLink";
import { render,screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'
describe("display item prop text in sidebarLink",()=>{
    it("show Dashboard in link",()=>{
           screen.debug()
            render(<Router><SidebarLink item={{text:"Dashboard",path:"/",icon:"dashboard"}}/></Router>)
 
         expect(screen.getByTestId('sidebarText')).toHaveTextContent("Dashboard")
    });
    it("show Tables in Link",()=>{
   
            render(<Router><SidebarLink item={{text:"Tables",path:"/tables",icon:"table_view"}}/></Router>)

        expect(screen.getByTestId('sidebarText').textContent).toContain("Tables")
    })
})



//error1
//useLocation() may be used only in the context of a <Router> component.
// to solve this error wrap your sidebarLink component in Router