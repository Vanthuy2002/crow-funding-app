import {
  Squares2X2Icon,
  MegaphoneIcon,
  BanknotesIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const listMenu = [
  {
    icon: <Squares2X2Icon className='w-8 h-8 text-icon' />,
    title: 'Dashboard',
    url: '/',
  },
  {
    icon: <MegaphoneIcon className='w-8 h-8 text-icon' />,
    title: 'Campain',
    url: '/campain',
  },
  {
    icon: <BanknotesIcon className='w-8 h-8 text-icon' />,
    title: 'Payment',
    url: '/payment',
  },
  {
    icon: <UserCircleIcon className='w-8 h-8 text-icon' />,
    title: 'Profile',
    url: '/me',
  },
  {
    icon: <ArrowRightOnRectangleIcon className='w-8 h-8 text-icon' />,
    title: 'Logout',
    url: '#!',
    onclick: () => null,
  },
  {
    icon: <SunIcon className='w-8 h-8 text-icon' />,
    title: 'Theme',
    url: '#!',
  },
];

const Sidebar = () => {
  return (
    <div className='w-full md:w-[76px] flex-shrink-0 rounded-3xl shadow-md bg-white px-[14px] py-10 flex flex-col'>
      {listMenu.map((menu) => (
        <NavLink
          data-tooltip-id='menu-tooltip'
          data-tooltip-content={menu.title}
          to={menu?.url}
          key={menu.title}
          className={classNames(
            'flex items-center gap-2 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8 last:mt-auto'
          )}
        >
          <span>{menu.icon}</span>
          <span className='md:hidden'>{menu.title}</span>
        </NavLink>
      ))}
      <Tooltip
        place='right'
        id='menu-tooltip'
        render={({ content }) => <span>{content}</span>}
      />
    </div>
  );
};

export default Sidebar;
