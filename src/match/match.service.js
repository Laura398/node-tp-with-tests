import { ResourceNotFoundError } from '../common/repository-error.js';
import { MatchModel } from './match.model.js';
import { EmptyResultError } from 'sequelize';
import { DateTime } from 'luxon';


class MatchService {
  findAll = () => MatchModel.findAll();

  findById = id => MatchModel.findByPk(id, { rejectOnEmpty: true })
    .catch(error => {
      if (error instanceof EmptyResultError) {
        throw new ResourceNotFoundError();
      }
      throw error;
    });

  create = item => Promise.resolve()
    .then(() => {
      const itemToCreate = {
        team1: item.team1,
        team2: item.team2,
        score: item.score
      };
      return MatchModel.create(itemToCreate);
    });

  patch = (id, item) => Promise.resolve()
    .then(() => {
      const matchToUpdate = {
        team1: item.team1,
        team2: item.team2,
        score: item.score
      };
      return MatchModel.update(matchToUpdate, { where: { id } });
    })
    .then(() => MatchModel.findByPk(id, { rejectOnEmpty: true }));

  set = (id, item) => Promise.resolve()
    .then(() => {
      const matchToUpdate = {
        team1: item.team1 ?? null,
        team2: item.team2 ?? null,
        score: item.score ?? null
      };
      return MatchModel.update(matchToUpdate, { where: { id } });
    })
    .then(() => MatchModel.findByPk(id, { rejectOnEmpty: true }));


  delete = id => MatchModel.destroy({ where: { id } })
    .then(deletedRowsCount => {
      if (!deletedRowsCount) {
        throw new ResourceNotFoundError();
      }
    });
}

export const matchService = new MatchService();
