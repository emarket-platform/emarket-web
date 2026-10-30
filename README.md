# Frontend - Web client

Git Repo:

https://github.com/emarket-platform/emarket-web

##  React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Библиотеки
- react-router-dom	Маршрутизация страниц
- @tanstack/react-query	Запросы к backend, кеширование и синхронизация данных
- zustand	Глобальное клиентское состояние
- i18next	Интернационализация
- react-i18next	Интеграция i18next с React

## Почему разделяем features, components и pages:
- pages — страницы, соответствующие URL.
- features — функциональные области приложения: авторизация, каталог, профиль, администрирование.
- components — переиспользуемые UI-компоненты и элементы layout.
- services — взаимодействие с внешними системами, прежде всего с backend.
- app — инициализация приложения, провайдеры и маршрутизация.

Это позволит развивать frontend независимо от backend-микросервисов.

### Frontend and backend
vite.config.ts - 8080 - локальный порт emarket-api-gateway.

В результате браузер будет обращаться к frontend по адресу:

 http://localhost:5173/api/web/...

А Vite перенаправит запрос на:
 http://localhost:8080/api/web/...

Это удобно для разработки: не нужно настраивать отдельный CORS между frontend и локальным dev-сервером. 
В production аналогичную маршрутизацию должен обеспечить reverse proxy или ingress.

### JWT
Не нужно добавлять JWT в localStorage или самостоятельно управлять refresh token в браузере. 
В выбранной архитектуре это ответственность Backend For Frontend.