import { Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";
import dataSource from "../../../../database";

class SpecificationsRepository implements ISpecificationsRepository {
  private repostiory: Repository<Specification>;

  constructor() {
    this.repostiory = dataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repostiory.create({
      description,
      name,
    });

    await this.repostiory.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repostiory.findOneBy({ name });
    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repostiory.find();
    return specifications;
  }
}

export { SpecificationsRepository };
