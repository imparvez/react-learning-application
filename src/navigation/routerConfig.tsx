// It will have all the routes of the application defined within at one place.
import { Route, Routes } from "react-router-dom";
import {
    ROOT,
    DASHBOARD,
    PAGE1,
    LOGIN
} from './constant';

const Home = () => {
    return (
        <div>HOME</div>
    )
};

const Dashboard = () => (<div>Dashboard</div>);

const Page1 = () => (<div>Page1</div>);

const Login = () => (<div>Login</div>);

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path={ROOT} element={<Home />} />
            <Route path={DASHBOARD} element={<Dashboard />} />
            <Route path={PAGE1} element={<Page1 />} />
            <Route path={LOGIN} element={<Login />} />
        </Routes>
    )
}