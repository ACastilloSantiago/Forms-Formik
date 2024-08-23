import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';

import logo from '../logo.svg'
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fromik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fromik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fromik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fromik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik abstraction</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="fromik-basic" element={<FormikBasicPage />} />
                    <Route path="fromik-yup" element={<FormikYupPage />} />
                    <Route path="fromik-components" element={<FormikComponents />} />
                    <Route path="fromik-abstraction" element={<FormikAbstraction />} />
                    <Route path="home" element={<RegisterPage />} />

                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
