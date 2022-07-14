/** @format */

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  HiOutlineBookOpen,
  // HiOutlineClipboardList,
  // HiOutlineCog,
  HiOutlineHome,
  // HiOutlineInbox,
  // HiOutlineUserCircle,
  // HiOutlineUsers,
} from 'react-icons/hi';

import MainLayout from 'components/layouts/MainLayout';
import Course from 'pages/Courses/Course';

const Home = lazy(() => import('pages/Home'));
const Categories = lazy(() => import('pages/Categories'));
const Courses = lazy(() => import('pages/Courses'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const PrivacyPolicy = lazy(() => import('pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('pages/TermsConditions'));
const NotFound = lazy(() => import('pages/NotFound'));

export const path = {
  home: '/',
  courses: '/cursos',
  categories: '/categorias',
  login: '/ingreso',
  register: '/registro',
  privacy_policy: '/politica-de-privacidad',
  terms_and_conditions: '/terminos-y-condiciones',
};

export const navigation = {
  main: [
    {
      id: 'home',
      label: 'Inicio',
      to: path.home,
      Icon: HiOutlineHome,
    },
    {
      id: 'courses',
      label: 'Cursos',
      to: path.courses,
      Icon: HiOutlineBookOpen,
    },
  ],
  auth: [
    {
      id: 'login',
      label: 'Ingreso',
      to: path.login,
      Icon: HiOutlineHome,
    },
    {
      id: 'register',
      label: 'Registro',
      to: path.register,
      Icon: HiOutlineHome,
    },
  ],
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.home} element={<MainLayout />}>
        <Route index path={path.home} element={<Home />} />
        <Route path={path.courses} element={<Courses />} />
        <Route path={`${path.courses}/:slug`} element={<Course />} />
        <Route path={path.categories} element={<Categories />} />
        <Route path={path.login} element={<Login />} />
        <Route path={path.register} element={<Register />} />
        <Route path={path.privacy_policy} element={<PrivacyPolicy />} />
        <Route path={path.terms_and_conditions} element={<TermsConditions />} />
        <Route path={'*'} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
