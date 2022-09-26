import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/createSpecificationController";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();
  return response.json(all);
});

export { specificationsRoutes };
