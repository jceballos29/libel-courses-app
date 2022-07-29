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

import {
  IoSchool,
  IoTrophy,
  IoBookmark,
  // IoBan, 
  IoRibbon,
  IoReceipt
} from 'react-icons/io5';

import MainLayout from 'components/layouts/MainLayout';

const Home = lazy(() => import('pages/Home'));
const Categories = lazy(() => import('pages/Categories'));
const Courses = lazy(() => import('pages/Courses'));
const Course = lazy(() => import('pages/Courses/Course'));
const Lessons = lazy(() => import('pages/Courses/Lessons'));
const Lesson = lazy(() => import('pages/Courses/Lesson'));
const Feedbacks = lazy(() => import('pages/Courses/Feedbacks'));
const Feedback = lazy(() => import('pages/Courses/Feedback'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const PrivacyPolicy = lazy(() => import('pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('pages/TermsConditions'));

const UserPortal = lazy(() => import('pages/User'));
const UserDashboard = lazy(() => import('pages/User/pages/Dashboard'));
const UserProcess = lazy(() => import('pages/User/pages/Process'));
const UserComplete = lazy(() => import('pages/User/pages/Complete'));
const UserFavorite = lazy(() => import('pages/User/pages/Favorites'));
// const UserExpired = lazy(() => import('pages/User/pages/Expired'));
const UserCertificates = lazy(() => import('pages/User/pages/Certificates'));
const UserReceipts = lazy(() => import('pages/User/pages/Receipts'));

const NotFound = lazy(() => import('pages/NotFound'));

export const path = {
  home: '/',
  courses: '/cursos',
  categories: '/categorias',
  login: '/ingreso',
  register: '/registro',
  privacy_policy: '/politica-de-privacidad',
  terms_and_conditions: '/terminos-y-condiciones',
  portal: '/portal',
  process: '/portal/proceso',
  completed: '/portal/completados',
  favorites: '/portal/lista-de-deseos',
  // expired: '/portal/expirados',
  certificates: '/portal/certificados',
  receipts: '/portal/recibos',
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
  user: [
    {
      id: 'courses',
      title: 'Cursos',
      items: [
        {
          id: 'process',
          label: 'En Proceso',
          to: path.process,
          Icon: IoSchool,
        },
        {
          id: 'complete',
          label: 'Finalizados',
          to: path.completed,
          Icon: IoTrophy,
        },
        {
          id: 'bookmarks',
          label: 'Lista de Deseos',
          to: path.favorites,
          Icon: IoBookmark,
        },
        // {
        //   id: 'expired',
        //   label: 'Expirados',
        //   to: path.expired,
        //   Icon: IoBan,
        // }
      ]
    },
    {
      id: 'services',
      title: 'Servicios',
      items: [
        {
          id: 'certificates',
          label: 'Certificados',
          to: path.certificates,
          Icon: IoRibbon,
        },
        {
          id: 'receipts',
          label: 'Recibos',
          to: path.receipts,
          Icon: IoReceipt,
        }
      ]
    }
  ]
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.home} element={<MainLayout />}>
        <Route index path={path.home} element={<Home />} />
        <Route path={path.courses} element={<Courses />} />
        <Route path={`${path.courses}/:slug`} element={<Course />} />
        <Route path={path.categories} element={<Categories />} />
        <Route
          // path={`${path.courses}/:slug/clases`}
          element={<Lessons />}>
          <Route
            path={`${path.courses}/:slug/clases/:number`}
            element={<Lesson />}
          />
        </Route>
        <Route element={<Feedbacks />} >
          <Route path={`${path.courses}/:slug/feedbacks/:number`} element={<Feedback />} />
        </Route>

        <Route path={path.portal} element={<UserPortal />} >
          <Route index element={<UserDashboard />} />
          <Route path={path.process} element={<UserProcess />} />
          <Route path={path.completed} element={<UserComplete />} />
          <Route path={path.favorites} element={<UserFavorite />} />
          {/* <Route path={path.expired} element={<UserExpired />} /> */}
          <Route path={path.certificates} element={<UserCertificates />} />
          <Route path={path.receipts} element={<UserReceipts />} />
        </Route>

        <Route path={path.login} element={<Login />} />
        <Route path={path.register} element={<Register />} />
        <Route
          path={path.privacy_policy}
          element={<PrivacyPolicy />}
        />
        <Route
          path={path.terms_and_conditions}
          element={<TermsConditions />}
        />
        <Route path={'*'} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
