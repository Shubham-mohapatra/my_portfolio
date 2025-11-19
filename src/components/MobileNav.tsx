import { Home, Code2, Briefcase, FileText } from 'lucide-react';

interface MobileNavProps {
  activeSection: string;
}

const MobileNav = ({ activeSection }: MobileNavProps) => {
  const navItems = [
    { label: 'Home', href: '#about', icon: Home },
    { label: 'Skills', href: '#skills', icon: Code2 },
    { label: 'Projects', href: '#projects', icon: Briefcase },
    { label: 'Resume', href: '/resume.pdf', icon: FileText }
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
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            
            return (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black scale-110' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
