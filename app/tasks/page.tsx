import { Typography, Card } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

const tasks = [
  'Анализ доходов и затрат по услугам и регионам.',
  'Прогнозирование бюджета на квартал и год.',
  'Оценка рентабельности тарифных предложений.',
  'Проверка эффективности инвестиционных проектов.',
  'Мониторинг KPI и операционных отклонений.',
  'Подготовка отчетов для руководства.',
];

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Задачи финансового аналитика</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          В ЭР-Телеком задачи аналитика формируют прозрачную финансовую стратегию, помогают оптимизировать расходы и выбирать лучшие проекты для развития.
        </Paragraph>
      </section>

      <CatRibbon
        label="Рабочие задачи"
        description="Ниже перечислены ключевые направления работы, которые позволяют аналитикам эффективно поддерживать телеком-проекты и инвестиции холдинга."
        catStyle="black"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {tasks.map((item, index) => (
          <Card key={index} className="rounded-[26px] border-brand-light/30 bg-brand-light/50 p-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-dark text-white text-lg font-semibold shadow-sm">
                {index + 1}
              </span>
              <Paragraph className="mb-0 text-slate-800 leading-7">{item}</Paragraph>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
