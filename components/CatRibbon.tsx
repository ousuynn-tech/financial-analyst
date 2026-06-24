'use client';

import { Typography } from 'antd';

const { Text } = Typography;

type CatRibbonProps = {
  label: string;
  description: string;
  catStyle?: 'orange' | 'black';
};

export default function CatRibbon({ label, description, catStyle = 'orange' }: CatRibbonProps) {
  return (
    <div className="relative my-12 overflow-visible rounded-[28px] border-2 border-brand-DEFAULT/30 bg-surface px-5 py-6 shadow-panel text-center">
      <div className="pt-2">
        <Text className="uppercase tracking-[0.22em] text-brand-dark/80 text-xs font-semibold">{label}</Text>
        <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-slate-700">{description}</p>
      </div>
    </div>
  );
}
