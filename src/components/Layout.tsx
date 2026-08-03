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
    <div className='min-h-screen overflow-x-hidden'>
      {/* Page content — bottom nav offset via pb-20 */}
      <main className='pb-20'>{children}</main>

      <DevEyesToggle />

      {/* Bottom navigation */}
      <nav
        className='fixed bottom-0 left-0 right-0 z-50'
        style={{
          background: 'rgba(15, 15, 15, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className='flex justify-center max-w-md mx-auto'>
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className='flex-1 flex flex-col items-center justify-center py-3 relative group'
              >
                {active && (
                  <span className='absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-b-full' />
                )}
                <i
                  className={`${item.icon} text-xl transition-colors duration-150 ${
                    active ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'
                  }`}
                />
                <span
                  className={`text-xs mt-0.5 font-medium transition-colors duration-150 ${
                    active ? 'text-primary' : 'text-gray-600 group-hover:text-gray-400'
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