'use client';

import { Typography, Card, List } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

const steps = [
  'Изучайте экономику, финансы, бухгалтерию и аналитику данных.',
  'Создавайте проекты и кейсы с финансовыми расчетами.',
  'Осваивайте Excel, Power BI, SQL и визуализацию.',
  'Ищите стажировки в телеком-проектах и финансовых службах.',
  'Развивайте навыки презентации и командной работы.',
];

export default function CareerPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Как начать карьеру студенту</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          Для начала важно не только изучать теорию, но и набирать практику. Важно понять потребности холдинга и научиться работать с реальными данными.
        </Paragraph>
      </section>

      <CatRibbon
        label="Путь студента"
        description="Шаги, которые помогают перейти от учебы к первой роли и быстрее войти в профессиональную команду финансовых аналитиков."
        catStyle="black"
      />

      <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/50 p-6">
        <List
          dataSource={steps}
          renderItem={(item, index) => (
            <List.Item className="rounded-3xl border border-brand-light/30 bg-white/80 shadow-sm" style={{ padding: '20px' }}>
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-dark text-white text-lg font-semibold">
                  {index + 1}
                </span>
                <Paragraph className="mb-0 text-slate-800 leading-7">{item}</Paragraph>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}
