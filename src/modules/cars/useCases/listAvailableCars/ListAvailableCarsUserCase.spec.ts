import { CarsRepositoryinMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryinMemory;

beforeEach(() => {
  carsRepositoryInMemory = new CarsRepositoryinMemory();
  listAvailableCarsUseCase = new ListAvailableCarsUseCase(
    carsRepositoryInMemory
  );
});

describe("List cars", () => {
  it("should be able to list all avaiable cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Carro Audi A1",
      description: "Description",
      daily_rate: 110.0,
      license_plate: "AAA-AAAA",
      fine_amount: 40,
      brand: "Audi",
      category_id: "d66e1c0b-7053-447f-821c-1cd9183ed3f3",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Carro Audi A2",
      description: "Description",
      daily_rate: 110.0,
      license_plate: "AAA-AAAA",
      fine_amount: 40,
      brand: "Audi2",
      category_id: "d66e1c0b-7053-447f-821c-1cd9183ed3f3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Audi2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "A3",
      description: "Description",
      daily_rate: 110.0,
      license_plate: "AAA-AAAA",
      fine_amount: 40,
      brand: "Audi3",
      category_id: "d66e1c0b-7053-447f-821c-1cd9183ed3f3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "A3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "A3",
      description: "Description",
      daily_rate: 110.0,
      license_plate: "AAA-AAAA",
      fine_amount: 40,
      brand: "Audi3",
      category_id: "d66e1c0b-7053-447f-821c-1cd9183ed3f3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "d66e1c0b-7053-447f-821c-1cd9183ed3f3",
    });

    expect(cars).toEqual([car]);
  });
});
