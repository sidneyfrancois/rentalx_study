import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/createSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationController = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationController.handle);

export { specificationsRoutes };
