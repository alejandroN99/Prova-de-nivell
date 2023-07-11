export class Score {
    private scoreA: number;
    private scoreB: number;
  
    constructor() {
      this.scoreA = 0;
      this.scoreB = 0;
    }
  
    private updateScoreA(points: number): void {
      this.scoreA += points;
    }
  
    private updateScoreB(points: number): void {
      this.scoreB += points;
    }
  
    scoreTeamA1(playerName: string): void {
      this.updateScoreA(1);
      console.log(`${playerName} scored 1 point for Team A.`);
    }
  
    scoreTeamA2(playerName: string): void {
      this.updateScoreA(2);
      console.log(`${playerName} scored 2 points for Team A.`);
    }
  
    scoreTeamA3(playerName: string): void {
      this.updateScoreA(3);
      console.log(`${playerName} scored 3 points for Team A.`);
    }
  
    scoreTeamB1(playerName: string): void {
      this.updateScoreB(1);
      console.log(`${playerName} scored 1 point for Team B.`);
    }
  
    scoreTeamB2(playerName: string): void {
      this.updateScoreB(2);
      console.log(`${playerName} scored 2 points for Team B.`);
    }
  
    scoreTeamB3(playerName: string): void {
      this.updateScoreB(3);
      console.log(`${playerName} scored 3 points for Team B.`);
    }
  
    getScore(): string {
      const scoreAString = this.scoreA.toString().padStart(3, '0');
      const scoreBString = this.scoreB.toString().padStart(3, '0');
      return `${scoreAString}:${scoreBString}`;
    }
  }