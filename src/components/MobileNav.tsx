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
      icon: <Home className='h-full w-full text-neutral-300' />,
      href: '#about',
    },
    {
      title: 'Skills',
      icon: <Code2 className='h-full w-full text-neutral-300' />,
      href: '#skills',
    },
    {
      title: 'Projects',
      icon: <Briefcase className='h-full w-full text-neutral-300' />,
      href: '#projects',
    },
    {
      title: 'Resume',
      icon: <FileText className='h-full w-full text-neutral-300' />,
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
    <div className='md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4'>
      <Dock 
        className='items-end pb-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl' 
        magnification={70} 
        distance={120}
      >
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.href;
          return (
            <div key={idx} onClick={() => handleClick(item.href)}>
              <DockItem
                className={`aspect-square rounded-full ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-transparent hover:bg-white/10'
                } transition-colors duration-200`}
              >
                <DockLabel className="text-white bg-black/90 border-white/10">{item.title}</DockLabel>
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
