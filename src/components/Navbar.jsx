/** @format */

import {
  HiMenu,
  HiX,
  HiOutlineDotsVertical,
  HiOutlineBell,
  HiOutlineInbox,
  HiOutlineLogout,
} from 'react-icons/hi';

import libelBrand from 'images/logo-libel.png';
import libelBrandDark from 'images/libel-logo-dark.png';
import defaultAvatar from 'images/default-avatar.jpg';

import classNames from 'utils/classNames';
import { navigation, path } from 'routes';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(logout());
    // navigate(path.home);
  };

  return (
      <nav className='bg-gray-800 w-full fixed top-0 z-20 shadow'>
        <div className='h-16 container flex items-center '>
          <Link to={path.home} className='h-full flex items-center focus:outline-none'>
            <img
              src={libelBrand}
              alt='Libel'
              className='h-12 w-auto'
            />
          </Link>
          <button
            className='ml-auto outline-none focus:outline-none lg:hidden'>
            <HiMenu className='text-white text-4xl' />
          </button>
          <div className='items-center space-x-2 ml-auto hidden lg:flex'>
            {navigation.main.map(({ id, label, to }) => (
              <NavLink
                to={to}
                key={id}
                end
                className={({ isActive }) =>
                  classNames(
                    'flex px-3 py-2 rounded-md text-sm font-medium',
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  )
                }>
                {label}
              </NavLink>
            ))}

          <div className='items-center space-x-2 ml-auto hidden lg:flex border-l border-gray-200/10   pl-4' >
          {
              navigation.auth.map(({ label, to }) => (
                <NavLink
                  to={to}
                  key={label}
                  end
                  // onClick={() => dispatch(closeMobileMenu())}
                  className={({ isActive }) =>
                    classNames(
                      'flex justify-center w-28 px-3 py-2 rounded-md text-center text-sm font-medium border duration-150',
                      isActive  
                        ? 'bg-transparent text-white border-gray-300 hover:bg-gray-700 hover:border-gray-700 hover:text-white'
                        : 'bg-white border-white hover:bg-gray-700 hover:border-gray-700 hover:text-white'
                    )
                  }>
                  {label}
                </NavLink>
              ))
            }
          </div>
          </div>
        </div>
      </nav>

    //   <div
    //     className={classNames(
    //       'h-screen w-full py-1 bg-gray-900 bg-opacity-70 fixed overflow-hidden top-0 z-30 duration-300 ease-in-out lg:hidden',
    //       mobileMenu ? 'visible opacity-100' : 'invisible opacity-0'
    //     )}>
    //     <div
    //       className={classNames(
    //         'h-full w-5/6 bg-white rounded-r-lg shadow px-4 pb-4 flex flex-col duration-300',
    //         mobileMenu ? 'translate-x-0' : '-translate-x-full'
    //       )}>
    //       <Link to={path.home} className='h-16 flex items-center'>
    //         <img
    //           src={libelBrandDark}
    //           alt='Libel'
    //           className='h-9 w-auto'
    //         />
    //       </Link>
    //       <div className='flex gap-2 mt-8'>
    //         {navigation.main.map(({ id, label, to, Icon }) => (
    //           <NavLink
    //             to={to}
    //             key={id}
    //             end
    //             className={({ isActive }) =>
    //               classNames(
    //                 'flex items-center justify-center flex-1 py-3 rounded-md border shadow duration-100',
    //                 isActive
    //                   ? 'bg-gray-900 border-gray-900 text-white'
    //                   : 'bg-white border-gray-300 text-gray-700'
    //               )
    //             }>
    //             <Icon className='mr-3 w-5 h-5' /> {label}
    //           </NavLink>
    //         ))}
    //       </div>

    //     <button
    //       className={classNames(
    //         'bg-white h-10 w-10 absolute top-1 right-0 rounded-l-lg flex items-center justify-center shadow duration-500',
    //         mobileMenu
    //           ? 'transform translate-x-0'
    //           : 'transform translate-x-full'
    //       )}>
    //       <HiX className='text-gray-900 text-2xl' />
    //     </button>
    //   </div>
    // </div>
    
            
  );
};

export default Navbar;
