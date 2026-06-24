'use client';

import { useMemo, useState } from 'react';
import { Button, Card, Typography } from 'antd';
import CatRibbon from '@/components/CatRibbon';

const { Title, Paragraph } = Typography;

const facts = [
  'Финансовый аналитик оценивает инвестиции так, чтобы сеть и новые услуги приносили прибыль быстрее.',
  'В телеком-холдинге аналитик помогает выбрать оптимальное соотношение затрат и качества услуг.',
  'Он готовит отчеты, которые влияют на решения по бюджету и развитию продуктов.',
  'Аналитик прогнозирует, сколько средств нужно для развития инфраструктуры и поддержки клиентов.',
  'В ЭР-Телеком аналитик участвует в оптимизации затрат и повышении операционной эффективности.',
  'Задача аналитика — перевести сложные данные в понятные рекомендации для бизнеса.',
];

const faceTransforms = [
  { x: -20, y: 45 },
  { x: -20, y: -45 },
  { x: 70, y: 45 },
  { x: 70, y: -45 },
  { x: -110, y: 45 },
  { x: 40, y: 45 },
];

export default function InteractivePage() {
  const [selected, setSelected] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [rotation, setRotation] = useState({ x: -20, y: 45 });

  const factNumber = selected + 1;

  const content = useMemo(
    () => ({
      title: `Факт №${factNumber}`,
      text: facts[selected],
    }),
    [selected, factNumber],
  );

  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    const next = Math.floor(Math.random() * 6);
    const transform = faceTransforms[next];
    setRotation(transform);

    setTimeout(() => {
      setSelected(next);
      setIsRolling(false);
    }, 2400);
  };

  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-brand-light/30 bg-white/90 p-8 shadow-panel">
        <Title className="text-3xl text-slate-900">Интерактивный 3D кубик</Title>
        <Paragraph className="mt-4 text-lg leading-8 text-slate-700">
          Нажмите на кнопку, чтобы бросить кубик. Число на выпадающей грани соответствует факту о финансовом аналитике.
        </Paragraph>
      </section>

      <CatRibbon
        label="Кубик фактов"
        description="Каждое число имеет свой факт: кубик делает игру на сайте более динамичной и визуально понятной."
        catStyle="orange"
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <Card className="rounded-[28px] border-brand-light/30 bg-brand-light/60 p-8 shadow-panel">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-[240px] w-[240px] items-center justify-center rounded-[32px] bg-white/80 shadow-panel">
              <div
                className="relative h-40 w-40 rounded-3xl border border-brand-light/30 bg-gradient-to-br from-brand-light to-accent p-4 shadow-2xl transition-transform duration-[2400ms] ease-out"
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, transformStyle: 'preserve-3d' }}
              >
                {Array.from({ length: 6 }, (_, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center rounded-3xl bg-brand-dark text-6xl font-black text-white shadow-inner`}
                    style={getFaceStyle(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              className="rounded-3xl px-8 py-4 text-base font-semibold"
              onClick={rollDice}
              loading={isRolling}
            >
              Кинуть кубик
            </Button>
          </div>
        </Card>

        <Card className="rounded-[28px] border-brand-light/30 bg-white/90 p-8 shadow-panel">
          <Title level={4} className="text-brand-dark">{content.title}</Title>
          <Paragraph className="mt-4 text-slate-700 leading-8">{content.text}</Paragraph>
        </Card>
      </div>
    </div>
  );
}

function getFaceStyle(index: number) {
  switch (index) {
    case 0:
      return { transform: 'rotateY(0deg) translateZ(90px)' };
    case 1:
      return { transform: 'rotateY(90deg) translateZ(90px)' };
    case 2:
      return { transform: 'rotateY(180deg) translateZ(90px)' };
    case 3:
      return { transform: 'rotateY(-90deg) translateZ(90px)' };
    case 4:
      return { transform: 'rotateX(90deg) translateZ(90px)' };
    case 5:
      return { transform: 'rotateX(-90deg) translateZ(90px)' };
    default:
      return {};
  }
}
