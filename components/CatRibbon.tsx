import { Typography } from 'antd';

const { Text } = Typography;

type CatRibbonProps = {
  label: string;
  description: string;
  catStyle?: 'orange' | 'black';
};

export default function CatRibbon({ label, description, catStyle = 'orange' }: CatRibbonProps) {
  const themeClass = catStyle === 'black' ? 'bg-slate-950 text-slate-50' : 'bg-orange-300 text-slate-950';

  return (
    <div className="relative mb-8 overflow-visible rounded-[28px] border border-brand-light/30 bg-brand-light/75 px-5 py-5 shadow-panel">
      <div className="absolute -top-8 left-6 flex items-end gap-2">
        <div className={`relative flex h-16 w-16 items-center justify-center rounded-full ${themeClass} shadow-lg`}>
          <span className="text-3xl">{catStyle === 'black' ? '🐈' : '🐱'}</span>
          <span className="absolute -right-2 top-8 h-6 w-6 rounded-full bg-white/90 shadow-sm animate-paw" />
        </div>
      </div>
      <div className="pt-8">
        <Text className="uppercase tracking-[0.22em] text-brand-dark/80 text-xs font-semibold">{label}</Text>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">{description}</p>
      </div>
    </div>
  );
}
