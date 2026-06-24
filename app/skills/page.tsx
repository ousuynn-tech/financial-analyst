'use client';

import { Typography, Card, Tag } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

const hardSkills = ['Excel и Power BI', 'Финансовое моделирование', 'Управленческая отчетность'];
const softSkills = ['Коммуникация', 'Стратегическое мышление', 'Точность'];

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Что нужно знать и уметь?</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          Современный финансовый аналитик — это не просто математик. Он умеет работать с таблицами, уверенно общается с коллегами из разных отделов и понятно объясняет сложные цифры.
        </Paragraph>
      </section>

      <CatRibbon
        label="Навыки и образование"
        description="Здесь показаны ключевые компетенции для работы в холдинге: технические инструменты и личные качества, которые важны для эффективной работы."
        catStyle="orange"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/60 p-6">
          <Title level={4}>Hard skills (проф. навыки)</Title>
          <div className="mt-4 flex flex-wrap gap-2">
            {hardSkills.map((skill) => (
              <Tag key={skill} color="success" className="rounded-2xl px-4 py-2 text-sm font-semibold">
                {skill}
              </Tag>
            ))}
          </div>
        </Card>
        <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/60 p-6">
          <Title level={4}>Soft skills (гибкие навыки)</Title>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Tag key={skill} color="cyan" className="rounded-2xl px-4 py-2 text-sm font-semibold">
                {skill}
              </Tag>
            ))}
          </div>
        </Card>
        <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/60 p-6">
          <Title level={4}>Образование</Title>
          <Paragraph className="mt-4 text-slate-700">
            Обычно для старта требуется высшее образование в сфере экономики, финансов или математики. Но главное — это желание учиться и разбираться в бизнесе!
          </Paragraph>
        </Card>
      </div>
    </div>
  );
}
