import { inject, injectable } from "tsyringe";
import { Car } from "../../infra/typeorm/entities/Cars";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.listAvailable(
      brand,
      category_id,
      name
    );

    return cars;
  }
}

export { ListCarsUseCase };
