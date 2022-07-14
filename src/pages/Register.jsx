import { Link } from 'react-router-dom'
import { path } from 'routes'
import { useForm } from 'react-hook-form';
import classNames from 'utils/classNames';

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  } 

  return (
        <section className='container section flex items-center justify-center'>
      <div className='w-full md:max-w-md p-6'>
        <h2 className='text-3xl font-bold text-slate-900 mb-3'>
        Regístrate
        </h2>
        <p className='text-sm text-slate-700 mb-8'>
        ¿Ya tienes una cuenta?{' '}
          <Link
            to={path.login}
            className='text-purple-700 hover:underline'>
            Inicia Sesión
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor='first_name' className='flex items-center justify-between mb-1 text-sm'>
              <span className='font-semibold text-slate-800'>Nombre</span>
              {errors?.firstName && (
              <span className='text-red-600 text-xs'>
                {errors.firstName.message}
              </span>
            )}
            </label>
            <input
              type='text'
              placeholder=''
              className={classNames(
                errors?.firstName && 'border-red-600',
                'w-full border rounded py-2 px-4 focus:outline-none'
              )}
              {...register('firstName', { required: 'Campo requerido' })}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='last_name' className='flex items-center justify-between mb-1 text-sm'>
              <span className='font-semibold text-slate-800'>Apellido</span>
              {errors?.lastName && (
              <span className='text-red-600 text-xs'>
                {errors.lastName.message}
              </span>
            )}
            </label>
            <input
              type='text'
              placeholder=''
              className={classNames(
                errors?.lastName && 'border-red-600',
                'w-full border rounded py-2 px-4 focus:outline-none'
              )}
              {...register('lastName', { required: 'Campo requerido' })}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='flex items-center justify-between mb-1 text-sm'>
              <span className='font-semibold text-slate-800'>Correo Electrónico</span>
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
            <label htmlFor='password' className='flex items-center justify-between mb-1 text-sm'>
              <span className='font-semibold text-slate-800'>Contraseña</span>
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
              {...register('password', { required: 'Campo requerido' })}
            />
          </div>
          <p className='text-xs text-white0 text-center my-5'>
            Al registrarte, aceptas nuestros <Link to={path.terms_and_conditions} className='text-purple-700 hover:underline'>Términos y Condiciones</Link> y la <Link to={path.privacy_policy} className='text-purple-700 hover:underline'>Política de Privacidad</Link>
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
              'Registrarse'
            )}*/}
            Registrarse
          </button>

        </form>
      </div>
    </section>
  )
}

export default Register