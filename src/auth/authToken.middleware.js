import { verifyToken } from "../common/token.util.js";

export const checkTokenMiddleware = (request, response, next) => {
  const token = request.headers.authorization?.split('Bearer ')[1];
  verifyToken(token)
    .then(() => next())
    .catch(() => next({ code: 401, details: 'Token is missing or invalid or expired' }));
};