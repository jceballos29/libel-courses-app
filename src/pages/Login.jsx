/** @format */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { path } from 'routes';
import { useForm } from 'react-hook-form';
import classNames from 'utils/classNames';

import { FaFacebookF, FaGoogle } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from 'redux/features/auth';
import { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { isLoading, isAuthenticated } = useSelector(
  //   (state) => state.auth
  // );

  const from = location.state ? location.state.from : path.dashboard

  const onSubmit = (data) => {
    // dispatch(login(data));
    console.log(data)
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate(from, { replace: true });
  //   }
  // }, [from, isAuthenticated, navigate]);

  return (
    <div className='container section flex items-center justify-center'>
      <div className='w-full md:max-w-md p-6'>
        <h2 className='text-3xl font-bold text-slate-900 mb-3'>
          Inicia Sesión
        </h2>
        <p className='text-sm text-slate-700 mb-8'>
          ¿Aún no tienes una cuenta?{' '}
          <Link
            to={path.register}
            className='text-purple-700 hover:underline'>
            Regístrate
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label
              htmlFor='email'
              className='flex items-center justify-between mb-1 text-sm'>
              <span className='font-semibold text-slate-800'>
                Correo Electrónico
              </span>
              {errors?.email && (
                <span className='text-red-600 text-xs'>
                  {errors.email.message}
                </span>
              )}
            </label>
            <input
              type='email'
              placeholder=''
              className={classNames(
                errors?.email && 'border-red-600',
                'w-full border rounded py-2 px-4 focus:outline-none'
              )}
              {...register('email', { required: 'Campo requerido' })}
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='password'
              className='flex items-center justify-between mb-1 text-sm'>
              <span className='font-semibold text-slate-800'>
                Contraseña
              </span>
              {errors?.password && (
                <span className='text-red-600 text-xs'>
                  {errors.password.message}
                </span>
              )}
            </label>
            <input
              type='password'
              placeholder=''
              className={classNames(
                errors?.password && 'border-red-600',
                'w-full border rounded py-2 px-4 focus:outline-none'
              )}
              {...register('password', {
                required: 'Campo requerido',
              })}
            />
          </div>
          <p className='text-sm text-purple-700 underline text-right mb-5 cursor-pointer'>
            ¿Olvidaste tu contraseña?
          </p>
          <button
            type='submit'
            // disabled={isLoading}
            className='flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded cursor-pointer '>
            {/* {isLoading ? (
              <>
                <span className='inline-block h-4 w-4 border-2 animate-spin border-t-purple-400 rounded-full mr-3' />
                <span>Cargando...</span>{' '}
              </>
            ) : (
              'Iniciar Sesión'
            )} */}
            Iniciar Sesión
          </button>
          <p className='text-xs text-white0 text-center my-5'>
            O ingresa usando
          </p>
          <div className='flex  gap-3'>
            <button
              type='button'
              className='border-2 border-facebook text-facebook hover:text-white hover:bg-facebook duration-150 font-medium py-3 rounded flex flex-1 items-center justify-center'>
              <FaFacebookF className='mr-2' />
              Facebook
            </button>
            <button
              // href='http://localhost:5000/api/auth/google'
              type='button'
              onClick={() => {
                axios
                  .post('auth/data', {
                    from,
                  })
                  .then((res) => {
                    window.location.href =
                      // 'https://api.jceballos.com.co/api/auth/google';
                      'http://localhost:5000/api/auth/google'
                  });
              }}
              className='border-2 border-google text-google hover:text-white hover:bg-google duration-150 font-medium py-3 rounded flex flex-1 items-center justify-center'>
              <FaGoogle className='mr-2' />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
