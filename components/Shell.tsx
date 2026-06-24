'use client';

import Link from 'next/link';
import { Layout, Menu, Typography } from 'antd';
import { usePathname } from 'next/navigation';

const { Header, Content, Footer } = Layout;

const menuItems = [
  { label: <Link href="/">Главная</Link>, key: '/' },
  { label: <Link href="/tasks">Задачи</Link>, key: '/tasks' },
  { label: <Link href="/skills">Навыки</Link>, key: '/skills' },
  { label: <Link href="/career">Студенту</Link>, key: '/career' },
  { label: <Link href="/day">День</Link>, key: '/day' },
  { label: <Link href="/value">Важно</Link>, key: '/value' },
  { label: <Link href="/interactive">Интерактив</Link>, key: '/interactive' },
];

type ShellProps = {
  children: React.ReactNode;
};

export default function Shell({ children }: ShellProps) {
  const pathname = usePathname() || '/';

  return (
    <Layout className="min-h-screen bg-surface text-slate-900">
      <Header className="sticky top-0 z-40 border-b border-brand-light/30 bg-white/90 backdrop-blur-xl px-4 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-brand-light px-3 py-1 text-brand-dark font-semibold tracking-wide shadow-sm">
              BACKROOMS
            </div>
            <Typography.Title level={4} className="mb-0 text-slate-900">
              Финансовый аналитик
            </Typography.Title>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={[pathname]}
            items={menuItems}
            className="bg-transparent border-none px-0"
          />
        </div>
      </Header>
      <Content className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
        {children}
      </Content>
      <Footer className="border-t border-slate-200 bg-white/70 py-6 text-center text-sm text-slate-600">
        prod. by BACKROOMS
      </Footer>
    </Layout>
  );
}
