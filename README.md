# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


💡 Полная последовательность команд:
bash
Копировать
Редактировать
cd /c/hyf/React/calculator      # перейти в папку проекта (если ещё не внутри неё)
git init                        # инициализация git-репозитория
git add .                       # добавление всех файлов
git commit -m "Initial commit"  # первый коммит
git remote add origin https://github.com/antonaksyuk/react-calculator.git  # добавление remote
git branch -M main              # создание/переименование ветки main
git push -u origin main         # пуш на GitHub