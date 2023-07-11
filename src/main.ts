import { Player } from "./player";
import { Score } from "./score";

export const teamA: Player[] = [
  { id: 1, name: "Alejandro" },
  { id: 2, name: "Ramon" },
  { id: 3, name: "James" },
  { id: 4, name: "Pepe" },
  { id: 5, name: "Durant" },
];
export const teamB: Player[] = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Tala" },
  { id: 3, name: "Gasol" },
  { id: 4, name: "Ibaka" },
  { id: 5, name: "Llull" },
];

export const newPlayer = (name: string, team: string) => {
  const teamAB: string = team.toUpperCase();
  const id = teamA.length + 1;

  const player = new Player(id, name);

  if (teamAB === "A") {
    teamA.push(player);
  } else if (teamAB === "B") {
    teamB.push(player);
  } else {
    return console.log("Error introduzca un equipo existente: A o B!");
  }

  return console.log(`Create player ${name} succesfully!`);
};

export const getName = (id: number, team: string) => {
  const teamAB: string = team.toUpperCase();

  if (teamAB === "A") {
    const findPLayer: Player | undefined = teamA.find(
      (player) => player.id === id
    );
    findPLayer
      ? console.log(findPLayer.name)
      : console.log("Player not found!");
  } else if (teamAB === "B") {
    const findPLayer = teamB.find((player) => player.id === id);
    findPLayer
      ? console.log(findPLayer.name)
      : console.log("Player not found!");
  } else {
    return console.log("Error introduzca un equipo existente: A o B!");
  }
};

export const getPlayers = (team: string) => {
  const teamAB: string = team.toUpperCase();

  if (teamAB === "A") {
    const playerList: Player[] | void = teamA.forEach((player) =>
      console.log(player)
    );
  } else if (teamAB === "B") {
    const playerList: Player[] | void = teamB.forEach((player) =>
      console.log(player)
    );
  } else {
    return console.log("Error introduzca un equipo existente: A o B!");
  }
};

const getShot = () => {
  return new Promise<void>((resolve) => {
    setTimeout(async () => {
    const randomNum: number = Math.floor(Math.random() * 3) + 1;
    const randomTeam: number = Math.random();
    let team: string;
    randomTeam < 0.5 ? (team = "A") : (team = "B");

    let namePlayer: any;
    const randomPlayer: number = Math.floor(Math.random() * 5) + 1;

    namePlayer = await getName(randomPlayer, team);

    switch (team) {
      case "A":
        switch (randomNum) {
          case 1:
            score1.scoreTeamA1(namePlayer);
            break;
          case 2:
            score1.scoreTeamA2(namePlayer);
            break;
          case 3:
            score1.scoreTeamA3(namePlayer);
            break;
        }
        break;
      case "B":
        switch (randomNum) {
          case 1:
            score1.scoreTeamB1(namePlayer);
            break;
          case 2:
            score1.scoreTeamB2(namePlayer);
            break;
          case 3:
            score1.scoreTeamB3(namePlayer);
            break;
        }
        break;
    }
    resolve();
      }, 2000);
  });
};

const play = async () =>  {
  for (let i = 0; i < 10; i++) {
     await getShot();
  }

  return console.log(score1.getScore());
};
  


const score1 = new Score();
getShot();
play();


