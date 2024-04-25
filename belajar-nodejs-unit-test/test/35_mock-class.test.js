import { UserRepository } from "../src/33_user-repo";
import { UserService } from "../src/34_user-service";

jest.mock("../src/33_user-repo.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class save", () => {
  const user = {
    id: 1,
    name: "test",
  };
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
});

test("test mock class findById", () => {
  const user = {
    id: 1,
    name: "test",
  };
  repository.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});

test("test mock class findAll", () => {
  const users = [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "test2",
    },
  ];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
