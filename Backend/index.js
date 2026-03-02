const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Create connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'parkolonyilvantarto',
});

//MySQL connect
db.connect(err => {
    if(err) throw err;
    console.log('Database connected');
});

//Parkolók
app.get('/api/parkolo', (req,res) => {
    db.query('SELECT * FROM parkolo',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Jarmuvek
app.get('/api/jarmu', (req,res) => {
    db.query('SELECT * FROM jarmu',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Parkolasok
app.get('/api/parkolas', (req,res) => {
    db.query('SELECT * FROM parkolas',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Parkolo tulaj
app.get('/api/parkolotulaj', (req,res) => {
    db.query('SELECT * FROM parkolotulaj',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Berlesek
app.get('/api/berles', (req,res) => {
    db.query('SELECT * FROM berles',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Szabad parkolok lekeres
app.get('/api/szabadparkolo', (req,res) => {
    db.query('SELECT * FROM parkolo p WHERE p.allapot = 0',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Foglalt parkolok lekerese
app.get('/api/foglaltparkolo', (req,res) => {
    db.query('SELECT * FROM parkolo p WHERE p.allapot = 1',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Berelt parkolok lekerdezese
app.get('/api/bereltparkolo', (req,res) => {
    db.query('SELECT DISTINCT * FROM parkolo p INNER JOIN berles b ON p.id = b.parkolo_id WHERE b.berles_kezdete <= NOW() AND b.berles_vege >= NOW()',
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Jarmu postolas
app.post('/api/jarmu', (req,res) => {
    const {rendszam,szin,tipus,tulajdonos} = req.body;
    db.query('INSERT INTO jarmu(rendszam,szin,tipus,tulajdonos) VALUES (?,?,?,?)',
        [rendszam,szin,tipus,tulajdonos],
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Tulajdonos postolasa
app.post('/api/parkolotulaj', (req,res) => {
    const {nev,telefonszam,email_cim} = req.body;
    db.query('INSERT INTO parkolotulaj(nev,telefonszam,email_cim) VALUES (?,?,?)',
        [nev,telefonszam,email_cim],
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Post berles
app.post('/api/berles', (req,res) => {
    const {parkolo_id,tulaj_id,berles_kezdete,berles_vege,ar} = req.body;
    db.query('INSERT INTO berles(parkolo_id,tulaj_id,berles_kezdete,berles_vege,ar) VALUES (?,?,?,?,?)',
        [parkolo_id,tulaj_id,berles_kezdete,berles_vege,ar],
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});

//Post parkolas
app.post('/api/parkolas', (req,res) => {
    const {jarmu_id,parkolo_id,parkolas_kezdete,parkolas_vege,parkolas_idotartama} = req.body;
    db.query('INSERT INTO parkolas(jarmu_id,parkolo_id,parkolas_kezdete,parkolas_vege,parkolas_idotartama) VALUES (?,?,?,?,?)',
        [jarmu_id,parkolo_id,parkolas_kezdete,parkolas_vege,parkolas_idotartama],
        (err,result) => {
            if(err) throw err;
            res.json(result);
        }
    );
});



//Port
if(require.main === module){
    const PORT = 3000;
    app.listen(PORT, (err) => {
    if(err) throw err;
        console.log(`Server is running on ${PORT}`);
    });
}

module.exports = app;

