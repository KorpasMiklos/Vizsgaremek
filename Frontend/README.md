# Frontend

Ez a repository a projekt frontend alkalmazását tartalmazza.

## 🚀 Technológiák

- JavaScript / TypeScript
- React / Vue / Angular (válaszd ki ami igaz)
- Vite / Webpack / Next.js
- CSS / SCSS / Tailwind

## 📦 Telepítés

Előfeltételek:

- Node.js (ajánlott: >=18)
- npm vagy yarn

Repository klónozása:

```bash
git clone https://github.com/szervezet/projekt-nev.git
cd frontend
```

Függőségek telepítése:

```bash
npm install
```

vagy

```bash
yarn install
```

## ▶️ Fejlesztői szerver indítása

```bash
npm run dev
```

vagy

```bash
npm start
```

Ezután az alkalmazás elérhető:

```
http://localhost:3000
```

## 🏗 Build készítése

Production build:

```bash
npm run build
```

A buildelt fájlok a következő mappába kerülnek:

```
/dist
```

vagy

```
/build
```

## 🧪 Tesztelés

Teszt futtatása:

```bash
npm run test
```

## 📁 Projekt struktúra

```
src/
  components/    # UI komponensek
  pages/         # oldalak / route-ok
  services/      # API hívások
  hooks/         # custom React hookok
  utils/         # segédfüggvények
  assets/        # képek, ikonok
  styles/        # globális stílusok
```

## ⚙️ Környezeti változók

Hozz létre egy `.env` fájlt:

```
VITE_API_URL=http://localhost:5000
```

vagy

```
REACT_APP_API_URL=http://localhost:5000
```

## 👨‍💻 Fejlesztési irányelvek

- használj **ESLint** és **Prettier** formázást
- komponensek legyenek **kis, újrafelhasználható egységek**
- API hívások külön `services` mappában legyenek

## 📄 Licenc

MIT License
