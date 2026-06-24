import { Card, Tag, Typography } from 'antd';

const { Title, Paragraph } = Typography;

type SectionCardProps = {
  title: string;
  description: string;
  tag?: string;
  accent?: 'green' | 'blue' | 'teal';
};

export default function SectionCard({ title, description, tag, accent = 'green' }: SectionCardProps) {
  const colorClass = accent === 'blue' ? 'border-blue-200 bg-blue-50' : accent === 'teal' ? 'border-teal-200 bg-teal-50' : 'border-brand-light/40 bg-brand-light/60';

  return (
    <Card className={`rounded-[28px] border ${colorClass} shadow-panel`} bodyStyle={{ padding: '24px' }}>
      <div className="space-y-3">
        {tag ? <Tag color={accent === 'blue' ? 'blue' : accent === 'teal' ? 'cyan' : 'success'}>{tag}</Tag> : null}
        <Title level={5} className="mb-0 text-slate-900">
          {title}
        </Title>
        <Paragraph className="mb-0 text-slate-700 leading-7">{description}</Paragraph>
      </div>
    </Card>
  );
}
