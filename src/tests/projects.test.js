/* eslint-disable testing-library/no-debugging-utils */

import { render, screen} from "@testing-library/react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import Projects from "../components/projects/Projects";
describe("show projects section",()=>{
    it("show heading", ()=>{
        render(<Provider store={store}><Projects/></Provider>);
       expect(screen.getByRole('heading', {  name: /projects/i}).textContent).toBe("Projects")
    })
})
