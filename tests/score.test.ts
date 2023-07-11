import { Score } from "../src/score";

describe('class Score', () => {
        
    let score1: Score; 

    beforeEach(() => {
        score1 = new Score();
    })
    

    test('scoreTeamA1 should increase score for Team A by 1', () => {
        score1.scoreTeamA1('Player A1');
        expect(score1.getScore()).toBe('001:000');
      });
    
      test('scoreTeamA2 should increase score for Team A by 2', () => {
        score1.scoreTeamA2('Player A2');
        expect(score1.getScore()).toBe('002:000');
      });
    
      test('scoreTeamA3 should increase score for Team A by 3', () => {
        score1.scoreTeamA3('Player A1');
        expect(score1.getScore()).toBe('003:000');
      });
    
      test('scoreTeamB1 should increase score for Team B by 1', () => {
        score1.scoreTeamB1('Player B1');
        expect(score1.getScore()).toBe('000:001');
      });
    
      test('scoreTeamB2 should increase score for Team B by 2', () => {
        score1.scoreTeamB2('Player B2');
        expect(score1.getScore()).toBe('000:002');
      });
    
      test('scoreTeamB3 should increase score for Team B by 3', () => {
        score1.scoreTeamB3('Player B2');
        expect(score1.getScore()).toBe('000:003');
      });
});