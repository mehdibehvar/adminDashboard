import {render,screen} from "@testing-library/react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'
import ProjectTables from "../components/tables/ProjectTables";
describe("change status of project to:",()=>{
    it("show project table header",()=>{
        render(<Provider store={store}><ProjectTables/></Provider>)
        expect(screen.getByRole('heading', {
            name: /projects table/i
          })).toHaveTextContent("Projects table");
    })
})