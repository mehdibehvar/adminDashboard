/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Profile from "../pages/profile/profile";


it("edit profile",async ()=>{
    render(<Router><Provider store={store}><Profile/></Provider></Router>);
    await waitFor(screen.getByRole('heading', {  name: /platform settings/i}));
    expect(screen.getByRole('heading', {  name: /platform settings/i})).toHaveTextContent('edit profile information');
})