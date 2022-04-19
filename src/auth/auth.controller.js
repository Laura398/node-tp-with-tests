import { EmptyResultError } from 'sequelize';
import { userService } from "../user/user.service.js";
import { generateToken } from '../common/token.util.js';

class AuthController {
    login = (request, response, next) => {
        const { email, password } = request.body;
        console.log(email, password);
        userService.login(email, password)
            .then(user => generateToken(user))
            .then(token => {
                response.json({token});
            })
            .catch(error => {
                if (error instanceof EmptyResultError) {
                    next({ code: 401, details: `Provided credentials are incorrect.` });
                } else {
                    next(error);
                }
            });
    };

    register = (request, response, next) => {
        userService.register(request.body)
            .then(item => {
                response.status(201);
                response.json(item);
            })
            .catch(error => {
                if (error instanceof EmptyResultError) {
                    next({ code: 401, details: `Provided credentials are incorrect.` });
                } else {
                    next(error);
                }
            });
    };
}

export const authController = new AuthController();
