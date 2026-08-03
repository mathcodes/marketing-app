import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DevEyesToggle from './DevEyesToggle';

type MenuItem = {
  id: number;
  title: string;
  path: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  { id: 0, title: 'Home',    path: '/',        icon: 'ri-home-smile-line' },
  { id: 1, title: 'About',   path: '/about',   icon: 'ri-user-line' },
  { id: 2, title: 'Clients', path: '/clients', icon: 'ri-team-line' },
  { id: 3, title: 'Contact', path: '/contact', icon: 'ri-mail-send-line' },
];

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  const location = useLocation();

  return (
    <div>
      <div className='pb-28 overflow-x-hidden'>{children}</div>

      <DevEyesToggle />

      {/* Bottom nav */}
      <nav className='fixed bottom-0 left-0 right-0 z-50'>
        <div
          className='flex justify-center'
          style={{
            background: 'rgba(30,30,30,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(78,174,186,0.2)',
          }}
        >
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className='flex flex-col items-center justify-center py-3 px-8 sm:px-5 relative transition-all duration-200 group'
                style={{ minWidth: 72 }}
              >
                {active && (
                  <span
                    className='absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-10 bg-primary rounded-b-full'
                  />
                )}
                <i
                  className={`${item.icon} text-2xl transition-colors duration-200 ${
                    active ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                  }`}
                />
                <span
                  className={`text-xs mt-0.5 font-medium transition-colors duration-200 ${
                    active ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Layout;