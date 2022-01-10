import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;

beforeEach(() => {
  listCarsUseCase = new ListCarsUseCase();
});

describe("List cars", () => {
  it("should be able to list all avaiable cars", async () => {
    await listCarsUseCase.execute();
  });
});
