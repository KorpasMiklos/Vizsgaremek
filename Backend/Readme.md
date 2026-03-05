# SzakiPark Backend

Ez a repository a SzakiPark parkolónyilvántartó rendszer backend részét tartalmazza.  
A backend Node.js + Express szerverrel készült, és MySQL adatbázist használ.

## Szükséges programok

A projekt futtatásához telepítve kell legyen:

- Node.js
- npm
- MySQL
- Git

## Projekt letöltése

Nyisd meg a Command Promptot (CMD), majd futtasd:

```bash
git clone https://github.com/felhasznalonev/repository-nev.git
```

Lépj be a projekt mappájába:

```bash
cd repository-nev
```

## Függőségek telepítése

A szükséges csomagok telepítése:

```bash
npm install
```

## Adatbázis beállítása

1. Hozz létre egy MySQL adatbázist.
2. Hozz létre egy `.env` fájlt a projekt gyökérmappájában.

Példa `.env` fájl:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=jelszo
DB_NAME=szakipark
PORT=3000
```

## Szerver indítása

Fejlesztői módban:

```bash
npm run dev
```

Normál módban:

```bash
npm start
```

## Elérés

Ha a szerver elindult, a backend itt érhető el:

```
http://localhost:3000
```

## Használt technológiák

- Node.js
- Express
- MySQL
