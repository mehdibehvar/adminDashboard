import { render,screen } from "@testing-library/react";
import Widget from "../components/widgets/Widget";
import '@testing-library/jest-dom'
describe("title was shown in widget is:",()=>{
    it("Today's Money",()=>{
      render(<Widget type={'today-money'}/>);
      expect(screen.getByText(/today's money/i)).toHaveTextContent(/Today's Money/i)
    })
    it("new clients",()=>{
      render(<Widget type={"new-clients"}/>);
      expect(screen.getByText(/new clients/i)).toHaveTextContent("new clients");
    })
})