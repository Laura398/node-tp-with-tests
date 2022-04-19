import jwt from 'jsonwebtoken';

const secret = '1234567890';

export const generateToken = user => new Promise((resolve, reject) => {
    const payload = {
        userId: user.id,
        role: user.role
    };
    return jwt.sign(payload, secret, {expiresIn: '4h'}, (error, token) => {
        if (error) {
            PromiseRejectionEvent(error);
        } else {
            resolve(token);
        }
    });
});

export const verifyToken = token => new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, payload) => {
      if (error) {
        reject(error);
      } else {
        resolve(payload);
      }
    });
  });
  