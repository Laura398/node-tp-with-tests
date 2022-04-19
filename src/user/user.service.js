import { EmptyResultError } from "sequelize";
import { UserModel } from "./user.model.js";
import { ResourceNotFoundError } from "../common/repository-error.js";

class UserService {
    login(email, password) {
        return UserModel.findOne({
            where: {
                email,
                password
            },
            rejectOnEmpty: true
        })
        .catch(error => {
            if (error instanceof EmptyResultError) {
                throw new ResourceNotFoundError();
            }
            throw error;
        });
    };

    register = item => Promise.resolve()
    .then(() => {
      const itemToCreate = {
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        password: item.password,
        role: item.role
      };
      return UserModel.create(itemToCreate);
    })
}

export const userService = new UserService();