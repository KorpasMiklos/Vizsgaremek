# SzakiPark Frontend

Ez a repository a **SzakiPark projekt frontend alkalmazását** tartalmazza.

## Technológiák

- JavaScript / TypeScript
- Angular

## Telepítés

### Előfeltételek

A projekt futtatásához telepítve kell legyen:

- Node.js
- npm

### Repository klónozása

Nyisd meg a Command Promptot (CMD) vagy a terminált, majd futtasd:

```bash
git clone https://github.com/felhasznalonev/frontend-repository-nev.git
```

Lépj be a projekt mappájába:

```bash
cd frontend
```

### Függőségek telepítése

```bash
npm install
```

## Fejlesztői szerver indítása

```bash
npm run dev
```

vagy

```bash
npm start
```

Ezután az alkalmazás elérhető lesz a böngészőben:

```
http://localhost:3000
```

## Build készítése

Production build készítése:

```bash
npm run build
```

A buildelt fájlok az alábbi mappába kerülnek:

```
/dist
```

vagy

```
/build
```

## Tesztelés

Tesztek futtatása:

```bash
npm run test
```

## Projekt struktúra

```
src/
  components/    # UI komponensek
  pages/         # oldalak / route-ok
  services/      # API hívások
  hooks/         # custom hookok
  utils/         # segédfüggvények
  assets/        # képek, ikonok
  styles/        # globális stílusok
```

## Környezeti változók

Hozz létre egy `.env` fájlt a projekt gyökérmappájában.

Példa:

```
VITE_API_URL=http://localhost:5000
```

vagy

```
REACT_APP_API_URL=http://localhost:5000
```

## Fejlesztési irányelvek

- használj ESLint és Prettier formázást
- a komponensek legyenek kis, újrafelhasználható egységek
- az API hívások a `services` mappában legyenek


