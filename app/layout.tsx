import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Финансовый аналитик | ЭР-Телеком',
  description: 'Многостраничный сайт о профессии финансового аналитика в ЭР-Телеком холдинге.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
