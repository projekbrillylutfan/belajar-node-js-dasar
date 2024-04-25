import { UserRepository } from "../src/33_user-repo";
import { UserService } from "../src/34_user-service";

const repository = new UserRepository;
const service = new UserService;

test('test mock class findById', () => { 
    const user = {
        id: 1,
        name: "test"
    }

    const findByIdMock = jest.spyOn(repository, "findById")
    findByIdMock.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
 })