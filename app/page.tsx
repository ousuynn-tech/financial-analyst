'use client';

import { Button, Card, Typography } from 'antd';
import Link from 'next/link';
import SectionCard from '@/components/SectionCard';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/80 p-8 shadow-panel">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <Title className="text-4xl text-slate-900 sm:text-5xl">Финансовый аналитик в ЭР-Телеком</Title>
            <Paragraph className="mt-4 max-w-xl text-lg leading-8 text-slate-700">
              Это специалист, который помогает компании тратить деньги с умом: он считает доходы и расходы, и подсказывает руководству, какие проекты принесут прибыль, а какие — убытки.
            </Paragraph>
          </div>
          <div className="rounded-[32px] bg-brand-light p-8 text-brand-dark shadow-panel">
            <Paragraph className="font-semibold uppercase tracking-[0.22em] text-brand-dark/80">Главный экран</Paragraph>
            <Title level={4} className="mt-4 mb-2 text-slate-900">
              Надежность, прогнозы, эффект.
            </Title>
            <Link href="/tasks" passHref>
              <Button type="primary" size="large" className="rounded-2xl px-8 py-4">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CatRibbon
        label="Переход к разделам"
        description="Каждый блок сайта рассказывает о ключевых аспектах работы финансового аналитика: от задач до навыков и важности роли внутри холдинга."
        catStyle="orange"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard
          title="Кто это"
          description="Это человек, который переводит сложный язык цифр на язык бизнеса. Он изучает графики и таблицы, чтобы понять, куда лучше вложить средства."
          tag="Профессия"
        />
        <SectionCard
          title="Рабочие задачи"
          description="Поддержка цен на тарифы, контроль бюджета, анализ новых проектов и подготовка отчетов для руководства простым и понятным языком."
          tag="Задачи"
          accent="blue"
        />
        <SectionCard
          title="Почему это важно"
          description="Благодаря аналитику компания не тратит деньги впустую. Он делает так, чтобы интернет и связь становились лучше, а бизнес стабильно рос."
          tag="Важность"
          accent="teal"
        />
      </div>
    </div>
  );
}
