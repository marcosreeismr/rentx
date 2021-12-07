import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { UsersTokensRepository } from "../../modules/accounts/repositories/implementations/UsersTokensRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepositoty } from "../../modules/accounts/repositories/IUsersTokensRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepositoty>(
  "UsersTokensRepository",
  UsersTokensRepository
);
