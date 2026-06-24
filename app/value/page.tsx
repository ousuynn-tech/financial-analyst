import { Typography, Card } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

export default function ValuePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Почему роль важна</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          Финансовый аналитик помогает холдингу принимать взвешенные решения, которые влияют на доходы, инвестиции, стоимость услуг и развитие сети.
        </Paragraph>
      </section>

      <CatRibbon
        label="Ценность роли"
        description="Роль аналитика в ЭР-Телеком обеспечивает баланс между эффективностью и устойчивым развитием бизнеса."
        catStyle="black"
      />

      <Card className="rounded-[26px] border-brand-light/30 bg-brand-light/50 p-6">
        <Paragraph className="mb-4 text-slate-800 leading-8">
          В холдинге финансовый аналитик является опорой для стратегических решений, он показывает, какие проекты имеют наибольший экономический эффект и помогает снизить риски финансовой модели.
        </Paragraph>
        <Paragraph className="mb-0 text-slate-700 leading-8">
          Именно через аналитику компания видит, какие инвестиции стоит поддержать, какие тарифы удержат клиентов и как направить ресурсы, чтобы обеспечить рост сети и качества услуг.
        </Paragraph>
      </Card>
    </div>
  );
}
