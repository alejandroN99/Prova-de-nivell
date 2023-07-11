import { Player } from "../src/player";

describe('class Player', () => {
    test('constructor class Player', () => {
        const result = new Player(6 ,'Jose');
        const expectedResult = {"id": 6, "name": "Jose"};

        expect(result).toEqual(expectedResult);

    });

});