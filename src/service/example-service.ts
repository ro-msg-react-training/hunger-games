import { ExampleEntity } from "../model/example-entity";
import { loadOrDefault } from "./utils/load-or-default";
import { exampleMockData } from "./data/example-mock-data";
import { save } from "./utils/save";

const STORE_KEY = "example-data";

export const exampleService = {
  loadAll(): Promise<ExampleEntity[]> {
    return Promise.resolve(loadOrDefault(STORE_KEY, exampleMockData));
  },

  removeById(id: string): Promise<ExampleEntity[]> {
    const data = loadOrDefault(STORE_KEY, exampleMockData);
    const updated = data.filter(entity => entity.id !== id);
    save(STORE_KEY, updated);
    return Promise.resolve(updated);
  }
};
