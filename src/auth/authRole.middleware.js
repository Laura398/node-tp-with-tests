import jwt_decode from "jwt-decode";

export const checkAdminMiddleware = (request, response, next) => {
    const token = request.headers.authorization?.split('Bearer ')[1];
    var decoded = jwt_decode(token);
    if (decoded.role === 'admin') {
      next();
    } else {
      next({ code: 401, details: 'User must be admin' });
    }
  };
  
  export const checkContributorOrAdminMiddleware = (request, response, next) => {
    const token = request.headers.authorization?.split('Bearer ')[1];
    var decoded = jwt_decode(token);
    if (decoded.role === 'contributor') {
      next();
    } else if (decoded.role === 'admin') {
      next();
    } else {
      next({ code: 401, details: 'User must be logged' });
    }
  };