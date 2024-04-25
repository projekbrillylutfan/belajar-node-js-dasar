import { getAllProducts } from "../src/29_database";

jest.mock("../src/29_database.js", () => {
    const originalModule = jest.requireActual("../src/29_database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    }
});