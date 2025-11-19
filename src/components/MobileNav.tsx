'use client';

import { Home, Code2, Briefcase, FileText } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface MobileDockProps {
  activeSection: string;
}

const MobileDock = ({ activeSection }: MobileDockProps) => {
  const navItems = [
    {
      title: 'Home',
      icon: <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#about',
    },
    {
      title: 'Skills',
      icon: <Code2 className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#skills',
    },
    {
      title: 'Projects',
      icon: <Briefcase className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#projects',
    },
    {
      title: 'Resume',
      icon: <FileText className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '/resume.pdf',
    },
  ];

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <div className='md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 z-50 max-w-full'>
      <Dock className='items-end pb-3'>
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.href;
          return (
            <div key={idx} onClick={() => handleClick(item.href)}>
              <DockItem
                className={`aspect-square rounded-full ${
                  isActive 
                    ? 'bg-white dark:bg-white' 
                    : 'bg-gray-200 dark:bg-neutral-800'
                } cursor-pointer transition-colors`}
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </div>
          );
        })}
      </Dock>
    </div>
  );
};

export default MobileDock;
