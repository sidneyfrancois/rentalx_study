import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO } from "../../../dtos/ICreateRentalDTO";
import { IRentalsRepository } from "../../../repositories/IRentalsRepository";
import { Rental } from "../entities/Rental";

class RentalRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  create({
    user_id,
    car_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    throw new Error("Method not implemented.");
  }

  findOpenRentalByCar(car_id: string): Promise<Rental> {
    throw new Error("Method not implemented.");
  }

  findOpenRentalByUser(user_id: string): Promise<Rental> {
    throw new Error("Method not implemented.");
  }
}

export { RentalRepository };
