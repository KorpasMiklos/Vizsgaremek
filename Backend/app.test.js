const request = require('supertest');

const mockQuery = jest.fn();
const mockConnect = jest.fn();

jest.mock('mysql2', () => {
    return {
        createConnection: jest.fn(() => ({
            connect: mockConnect,
            query: mockQuery
        }))
    };
});

const app = require('./index');

describe('Unit tesztek - mockolt mysql2', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('GET /api/parkolo - visszaad mockolt adatot', async () => {

        const fakeData = [
            { id: 1, allapot: 0 },
            { id: 2, allapot: 1 }
        ];

        mockQuery.mockImplementation((sql, callback) => {
            callback(null, fakeData);
        });

        const res = await request(app).get('/api/parkolo');

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(fakeData);
    });

    test('GET /api/szabadparkolo - csak allapot=0', async () => {

        const fakeData = [
            { id: 3, allapot: 0 }
        ];

        mockQuery.mockImplementation((sql, callback) => {
            callback(null, fakeData);
        });

        const res = await request(app).get('/api/szabadparkolo');

        expect(res.statusCode).toBe(200);
        expect(res.body[0].allapot).toBe(0);
    });

    test('POST /api/jarmu - sikeres beszúrás', async () => {

        mockQuery.mockImplementation((sql, values, callback) => {
            callback(null, { insertId: 10 });
        });

        const ujJarmu = {
            rendszam: 'TESZT-999',
            szin: 'kék',
            tipus: 'Audi',
            tulajdonos: 'Teszt Sándor'
        };

        const res = await request(app)
            .post('/api/jarmu')
            .send(ujJarmu);

        expect(res.statusCode).toBe(200);
        expect(res.body.insertId).toBe(10);
    });

});