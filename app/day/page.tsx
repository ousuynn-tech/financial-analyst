'use client';

import { Typography, Card } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

const timeline = [
  { time: '08:30', text: 'Анализ утренних показателей и сбор дашбордов.' },
  { time: '10:00', text: 'Обсуждение тарифных предложений с командой продукта.' },
  { time: '12:00', text: 'Проверка затрат и отклонений от плана.' },
  { time: '14:00', text: 'Подготовка финансовой презентации для совещания.' },
  { time: '16:00', text: 'Совещание с руководством и корректировка прогноза.' },
];

export default function DayPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Один день из жизни</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          Каждый рабочий день аналитика сочетает рутинные проверки, совместную работу с продуктом и подготовку важных решений для развития холдинга.
        </Paragraph>
      </section>

      <CatRibbon
        label="День аналитика"
        description="Шаги дня показывают, как аналитикам удается поддерживать баланс между данными, командной работой и управленческими задачами."
        catStyle="orange"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {timeline.map((item) => (
          <Card key={item.time} className="rounded-[26px] border-brand-light/30 bg-brand-light/60 p-6">
            <Title level={5} className="text-brand-dark">{item.time}</Title>
            <Paragraph className="mb-0 text-slate-700 leading-7">{item.text}</Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
}
