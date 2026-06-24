'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Menu, Typography, ConfigProvider } from 'antd';
import { usePathname } from 'next/navigation';

const { Header, Content, Footer } = Layout;

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Задачи', href: '/tasks' },
  { label: 'Навыки', href: '/skills' },
  { label: 'Студенту', href: '/career' },
  { label: 'День', href: '/day' },
  { label: 'Важно', href: '/value' },
  { label: 'Интерактив', href: '/interactive' },
];

const menuItems = navLinks.map((link) => ({
  label: <Link href={link.href}>{link.label}</Link>,
  key: link.href,
}));

type ShellProps = {
  children: React.ReactNode;
};

export default function Shell({ children }: ShellProps) {
  const pathname = usePathname() || '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#21A038',
          fontFamily: 'Inter, system-ui, sans-serif',
        },
      }}
    >
      <Layout className="min-h-screen bg-surface text-slate-900 overflow-x-hidden relative">
        <Image src="/cats/image2.png" alt="cat" width={160} height={160} className="fixed bottom-4 left-4 z-50 pointer-events-none drop-shadow-lg w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 hover:animate-paw" style={{ imageRendering: 'pixelated' }} />
        <Image src="/cats/image4.png" alt="cat" width={160} height={160} className="fixed bottom-4 right-4 z-50 pointer-events-none drop-shadow-lg w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 hover:animate-paw" style={{ imageRendering: 'pixelated' }} />
        <Header className="sticky top-0 z-40 border-b border-brand-light/30 bg-white/90 backdrop-blur-xl px-4 py-4 shadow-sm" style={{ height: 'auto', lineHeight: 'normal' }}>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-brand-light px-3 py-1 text-brand-dark font-semibold tracking-wide shadow-sm">
                  BACKROOMS
                </div>
                <Typography.Title level={4} className="text-slate-900" style={{ margin: 0 }}>
                  Финансовый аналитик
                </Typography.Title>
              </div>
              
              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-brand-light/50 text-slate-800 transition-all active:scale-95 flex items-center justify-center"
                aria-label="Открыть меню"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={[pathname]}
                items={menuItems}
                className="bg-transparent border-none px-0"
              />
            </div>
          </div>
        </Header>
        
        <Content className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
          {children}
        </Content>
        
        <Footer className="border-t border-slate-200 bg-white/70 py-6 text-center text-sm text-slate-600">
          prod. by BACKROOMS
        </Footer>

        {/* Mobile Drawer Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Panel */}
            <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out border-l border-brand-light/20">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-brand-light px-3 py-1 text-xs text-brand-dark font-bold tracking-wide">
                      BACKROOMS
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    
                    return (
                      <Link 
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${
                          isActive 
                            ? 'bg-brand text-white shadow-md shadow-brand/20' 
                            : 'text-slate-700 hover:bg-brand-light/30 hover:text-brand-dark'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              
              {/* Footer with a cute pixel cat! */}
              <div className="border-t border-slate-100 pt-6 flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 animate-play" style={{ imageRendering: 'pixelated' }}>
                  <Image src="/cats/image1.png" alt="menu cat" fill className="object-contain" />
                </div>
                <span className="text-xs text-slate-400 font-medium">prod. by BACKROOMS</span>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </ConfigProvider>
  );
}
