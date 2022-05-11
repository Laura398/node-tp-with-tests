import supertest from 'supertest';
import { app } from './index.js';

await describe('app', () => {
  describe('matches', () => {
    describe('findAll', () => {
      it('should respond with success', () => {
        return supertest(app)
          .get('/matches')
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
            expect(typeof response.body[0]).toBe('object');
            expect(typeof response.body[0].id).toBe('number');
            expect(typeof response.body[0].team1).toBe('string');
            expect(typeof response.body[0].team2).toBe('string');
            expect(typeof response.body[0].score).toBe('string');
            expect(typeof response.body[0].date).toBe('date');
          });
      });
      it('should respond with bad request', () => {
        return supertest(app)
        .create('/matches')
        .then(response => {
          expect(response).toBeTruthy();
          expect(response.status).toBe(404);
          expect(response.body.length).toBe(1);
        });
      });
    });
    describe('findById', () => {
      it('should respond with success', () => {
        return supertest(app)
          .get('/matches/1')
          .then(request => {
            expect(request.params.id).toBe(1);
          })
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1);
            expect(typeof response.body).toBe('object');
            expect(typeof response.body.id).toBe('number');
            expect(typeof response.body.team1).toBe('string');
            expect(typeof response.body.team2).toBe('string');
            expect(typeof response.body.score).toBe('string');
            expect(typeof response.body.date).toBe('date');
          });
      });
      it('should respond with not found', () => {
        return supertest(app)
        .get('/matches/1')
        .then(response => {
          expect(response).toBeTruthy();
          expect(response.status).toBe(404);
          expect(response.body.length).toBe(1);
        });
      });
    });
    describe('delete', () => {
      it('should respond with success', () => {
        return supertest(app)
          .delete('/matches/1')
          .then(request => {
            expect(request.params.id).toBe(1);
          })
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(204);
            expect(response.body.length).toBe(1);
          });
      });
      it('should respond with not found', () => {
        return supertest(app)
          .delete('/matches/1')
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(404);
            expect(response.body.length).toBe(1);
          });
      });
    });
    describe('create', () => {
      it('should respond with success', () => {
        return supertest(app)
          .create('/matches')
          .then(request => {
            expect(typeof request.body).toBe('object');
            expect(typeof request.body.team1).toBe('string');
            expect(typeof request.body.team2).toBe('string');
            expect(typeof request.body.score).toBe('string');
            expect(typeof request.body.date).toBe('date');
          })
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(201);
            expect(response.body.length).toBe(1);
          });
      });
      it('should respond with bad request', () => {
        return supertest(app)
        .create('/matches')
        .then(response => {
          expect(response).toBeTruthy();
          expect(response.status).toBe(404);
          expect(response.body.length).toBe(1);
        });
      });
    });
    describe('patch', () => {
      it('should respond with success', () => {
        return supertest(app)
          .patch('/matches/1')
          .then(request => {
            expect(request.params.id).toBe(1);
            expect(typeof request.body).toBe('object');
            expect(typeof request.body.team1).toBe('string');
            expect(typeof request.body.team2).toBe('string');
            expect(typeof request.body.score).toBe('string');
            expect(typeof request.body.date).toBe('date');
          })
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(201);
            expect(response.body.length).toBe(1);
          });
      });
      it('should respond with not found', () => {
        return supertest(app)
        .create('/matches/1')
        .then(response => {
          expect(response).toBeTruthy();
          expect(response.status).toBe(404);
          expect(response.body.length).toBe(1);
        });
      });
    });
    describe('set', () => {
      it('should respond with success', () => {
        return supertest(app)
          .patch('/matches/1')
          .then(request => {
            expect(request.params.id).toBe(1);
            expect(typeof request.body).toBe('object');
            expect(typeof request.body.team1).toBe('string');
            expect(typeof request.body.team2).toBe('string');
            expect(typeof request.body.score).toBe('string');
            expect(typeof request.body.date).toBe('date');
          })
          .then(response => {
            expect(response).toBeTruthy();
            expect(response.status).toBe(201);
            expect(response.body.length).toBe(1);
          });
      });
      it('should respond with not found', () => {
        return supertest(app)
        .create('/matches/1')
        .then(response => {
          expect(response).toBeTruthy();
          expect(response.status).toBe(404);
          expect(response.body.length).toBe(1);
        });
      });
    });
  });
});
