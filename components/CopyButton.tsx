'use client';

import { Button, message } from 'antd';
import { useState } from 'react';

type CopyButtonProps = {
  text: string;
  label?: string;
};

export default function CopyButton({ text, label = 'Копировать' }: CopyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    setLoading(true);
    try {
      await navigator.clipboard.writeText(text);
      message.success('Текст скопирован');
    } catch {
      message.error('Не удалось скопировать');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button type="primary" onClick={handleCopy} loading={loading} className="rounded-xl px-6 py-3 font-semibold">
      {label}
    </Button>
  );
}
