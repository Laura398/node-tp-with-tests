import supertest from 'supertest';
import { app } from './index.js';

describe('app', () => {
  describe('matches', () => {
    describe('GET /matches', () => {
      it('should return 200', async () => {
        return supertest(app)
          .get('/matches')
          .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
          });
      });
    });
    describe('GET /matches/:id', () => {
      it('should return 200', async () => {
        return supertest(app)
          .get('/matches/1')
          .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Object);
          });
      });
      it('should return 404', async () => {
        return supertest(app)
          .get('/matches/100')
          .then(response => {
            expect(response.status).toBe(404);
          });
      });
      it('should return 400', async () => {
        return supertest(app)
          .get('/matches/abc')
          .then(response => {
            expect(response.status).toBe(400);
          });
      });
    });
    describe('POST /matches', () => {
      it('should return 201', async () => {
        return supertest(app)
          .post('/matches')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toBeInstanceOf(Object);
          });
      });
      it('should return 400', async () => {
        return supertest(app)
          .post('/matches')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(400);
          });
      });
    });
    describe('delete /matches/:id', () => {
      it('should return 201', async () => {
        return supertest(app)
          .delete('/matches/1')
          .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toBeInstanceOf(Object);
          });
      });
      it('should return 401', async () => {
        return supertest(app)
          .delete('/matches/100')
          .then(response => {
            expect(response.status).toBe(401);
          });
      });
    });
    describe('pacth /matches/:id', () => {
      it('should return 201', async () => {
        return supertest(app)
          .patch('/matches/1')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toBeInstanceOf(Object);
          });
      });
      it('it should return 400', async () => {
        return supertest(app)
          .patch('/matches/100')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(400);
          });
      });
      it('should return 404', async () => {
        return supertest(app)
          .patch('/matches/100')
          .send({
            id: 100,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(404);
          });
      });
      it('should return 401', async () => {
        return supertest(app)
          .patch('/matches/1')
          .send({
            id: 100,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(401);
          });
      });
      it('should return 403', async () => {
        return supertest(app)
          .patch('/matches/1')
          .send({
            id: 100,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(403);
          });
      });
    });
    describe('put /matches/:id', () => {
      it('should return 400', async () => {
        return supertest(app)
          .put('/matches/1')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toBeInstanceOf(Object);
          });
      });
      it('should return 201', async () => {
        return supertest(app)
          .put('/matches/1')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toBeInstanceOf(Object);
          });
      });
      it('should return 404', async () => {
        return supertest(app)
          .put('/matches/100')
          .send({
            id: 100,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(404);
          });
      });
      it('should return 400', async () => {
        return supertest(app)
          .put('/matches/1')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(400);
          });
      });
      it('should return 403', async () => {
        return supertest(app)
          .put('/matches/1')
          .send({
            id: 4,
            team1: "Brazil",
            team2: "Croatia",
            score: "2-6",
            date: "2018-06-18T00:00:00.000Z"
          })
          .then(response => {
            expect(response.status).toBe(403);
          });
      });
    });
  });
  });
