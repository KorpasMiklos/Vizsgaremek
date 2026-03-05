# SzakiPark Backend

Ez a repository a SzakiPark parkolónyilvántartó rendszer backend részét tartalmazza.  
A backend Node.js + Express szerverrel készült, és MySQL adatbázist használ.

## Szükséges programok

A projekt futtatásához telepítve kell legyen:

- Node.js
- npm
- MySQL

## Projekt letöltése

Nyisd meg a Command Promptot (CMD), majd futtasd:

Lépj be a projekt mappájába:

```bash
cd backend
```

## Függőségek telepítése

A szükséges csomagok telepítése:

```bash
npm init -y
npm install express cors mysql2 body-parser
```

## Adatbázis beállítása

1. Hozz létre egy MySQL adatbázist.
2. Hozz létre egy `index.js` fájlt a projekt gyökérmappájában.

Példa `index.js` fájl:

```
host=localhost
user=root
password=
database=parkolonyilvantarto
PORT=3000
```

## Szerver indítása

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
