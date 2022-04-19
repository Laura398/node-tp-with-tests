import { Router } from 'express';
import { idCheckMiddleware } from '../common/id-check.middleware.js';
import { matchCheckMiddleware } from './match.middleware.js';
import { matchController } from './match.controller.js';
import { resourceMethodNotHandledMiddleware } from '../common/resource-not-handled.middleware.js';
import { checkTokenMiddleware } from '../auth/authToken.middleware.js';
import { checkAdminMiddleware, checkContributorOrAdminMiddleware } from '../auth/authRole.middleware.js';

export const matchRouter = Router();

matchRouter.get('/', matchController.findAll);
matchRouter.get('/:id', idCheckMiddleware(true), matchController.find);
matchRouter.post('/', checkTokenMiddleware, checkContributorOrAdminMiddleware, matchCheckMiddleware(true), matchController.create);
matchRouter.patch('/:id', idCheckMiddleware(true), checkTokenMiddleware, checkContributorOrAdminMiddleware, matchCheckMiddleware(false), matchController.patch);
matchRouter.put('/:id', idCheckMiddleware(true), checkTokenMiddleware, checkContributorOrAdminMiddleware, matchCheckMiddleware(false), matchController.set);
matchRouter.delete('/:id', idCheckMiddleware(true), checkTokenMiddleware, checkAdminMiddleware, matchController.delete);
matchRouter.use(resourceMethodNotHandledMiddleware);
