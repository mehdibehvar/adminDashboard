/* eslint-disable testing-library/no-node-access */
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { Provider } from "react-redux";
import { store } from "../app/store";
import '@testing-library/jest-dom'
import LoginForm from "../components/LoginForm"
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event"
it("typing email",async ()=>{
    render(<Router><Provider store={store}><LoginForm/></Provider></Router>);
    // userEvent.click(screen.getByRole('textbox', {  name: /email/i}))
  await  userEvent.type(screen.getByRole('textbox', {  name: /email/i}),"admin@gmail.com")
    expect(screen.getByRole("textbox",{name:/email/i})).toHaveValue("admin@gmail.com")
})
it("typing password",async ()=>{
  render(<Router><Provider store={store}><LoginForm/></Provider></Router>);
await  userEvent.type(screen.getByTestId('passinput'),"1234567")
  expect(screen.getByTestId('passinput')).toHaveValue("1234567")
})

it("error in sign in",async ()=>{
    render(<Router><Provider store={store}><LoginForm/></Provider></Router>);
    await  userEvent.type(screen.getByRole('textbox', {  name: /email/i}),"admin@gmail.com")
  await  userEvent.type(screen.getByTestId('passinput'),"123")
   await    userEvent.click(screen.getByRole('button', {  name: /sign in/i}))
    await waitForElementToBeRemoved(document.querySelector("div.spinner-border"),{timeout:5000});
    expect(screen.getByText(/the password must be at least 5 characters\./i)).toHaveTextContent('The password must be at least 5 characters.');
})
// it("show loading",async ()=>{
//   render(<Router><Provider store={store}><LoginForm/></Provider></Router>);

//   await  userEvent.type(screen.getByRole('textbox', {  name: /email/i}),"admin@gmail.com")
// await  userEvent.type(screen.getByTestId('passinput'),"123456")
//  await    userEvent.click(screen.getByRole('button', {  name: /sign in/i}))
//   expect(screen.getByRole('status')).toBeInTheDocument();
// })
// it("sign in",async ()=>{
//   render(<Router><Provider store={store}><LoginForm/></Provider></Router>);
//   await  userEvent.type(screen.getByRole('textbox', {  name: /email/i}),"admin@gmail.com")
// await  userEvent.type(screen.getByTestId('passinput'),"123456")
//  await    userEvent.click(screen.getByRole('button', {  name: /sign in/i}));
//  await screen.findByText(/sign out/i)
//   expect(screen.getByRole('heading', {  name: /dashboard/i})).toHaveTextContent("dashboard");
// })
