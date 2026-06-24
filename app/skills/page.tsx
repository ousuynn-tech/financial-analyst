import { Typography, Card, Tag } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

const hardSkills = ['Excel и Power BI', 'Финансовое моделирование', 'Управленческая отчетность'];
const softSkills = ['Коммуникация', 'Стратегическое мышление', 'Точность'];

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Hard skills и soft skills</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          Современный финансовый аналитик комбинирует технические навыки работы с данными и умение общаться с командами, чтобы преобразовать информацию в результат.
        </Paragraph>
      </section>

      <CatRibbon
        label="Навыки и образование"
        description="Здесь показаны ключевые компетенции для работы в холдинге: технические инструменты и личные качества, которые важны для эффективной работы."
        catStyle="orange"
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/60 p-6">
          <Title level={4}>Hard skills</Title>
          <div className="mt-4 space-y-4">
            {hardSkills.map((skill) => (
              <Tag key={skill} color="success" className="rounded-2xl px-4 py-3 text-base font-semibold">
                {skill}
              </Tag>
            ))}
          </div>
        </Card>
        <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/60 p-6">
          <Title level={4}>Soft skills</Title>
          <div className="mt-4 space-y-4">
            {softSkills.map((skill) => (
              <Tag key={skill} color="cyan" className="rounded-2xl px-4 py-3 text-base font-semibold">
                {skill}
              </Tag>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
