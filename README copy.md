# Financial Analyst / Next.js App Router

Проект представляет собой многостраничный сайт о профессии финансового аналитика в ЭР-Телеком холдинге.

## Стек
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Ant Design

## Структура страниц
- `/` — главная
- `/tasks` — задачи
- `/skills` — hard skills и soft skills
- `/career` — как начать карьеру студенту
- `/day` — один день из жизни
- `/value` — значение роли
- `/interactive` — 3D-кубик с фактами

## Компоненты
- `components/Shell.tsx` — общий макет с меню Ant Design.
- `components/SectionCard.tsx` — карточка контента.
- `components/CopyButton.tsx` — кнопка копирования текста.
- `components/CatRibbon.tsx` — декоративная сноска с котиком.

## Разворачивание
1. Установить зависимости:
   ```bash
   npm install
   ```
2. Запустить dev-сервер:
   ```bash
   npm run dev
   ```
3. Сборка production:
   ```bash
   npm run build
   ```

## Деплой
Проект готов для деплоя на Vercel.
```bash
vercel deploy
```
