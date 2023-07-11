import { teamA, teamB, getName, getPlayers, newPlayer } from "../src/main";

describe("Functions main", () => {

  beforeEach(() => {
    teamA.length = 5;
    teamB.length = 5;
  });

  test("Function newPlayer", () => {
    const result = newPlayer("PlayerTest", "A");
    const expectedResult = 6;

    expect(teamA.length).toBe(expectedResult);
  });

  test("Function getName", () => {
    const playerId = 3;
    const team = "A";
    console.log = jest.fn();

    getName(playerId, team);
    const expectedResult = "James";

    expect(console.log).toHaveBeenCalledWith(expectedResult);
  });

  test("Function getPlayers", () => {
    const team = "A";
    console.log = jest.fn(); 

    getPlayers(team);

    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenLastCalledWith({ id: 5, name: "Durant" });
  });

});
