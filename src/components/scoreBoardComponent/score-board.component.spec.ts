import { TestBed, async } from '@angular/core/testing';

import { ScoreComponent } from './score-board.component';

describe('ScoreComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScoreComponent
      ],
    }).compileComponents();
  }));

  it('should create the component ScoreComponent', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    expect(scoreComponent).toBeTruthy();
  }));

  it('should check that all property of component are setup correctly', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    expect(scoreComponent.aiScore).toEqual(10);
    expect(scoreComponent.playerScore).toEqual(10);
    expect(scoreComponent.finalScore).toEqual('');
  }));

  it('should check that all player point decrease after call of decreasePlayerScore', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    expect(scoreComponent.playerScore).toEqual(10);
    scoreComponent.decreasePlayerScore();
    expect(scoreComponent.playerScore).toEqual(9);
  }));

  it('should check that all ai point decrease after call of decreaseAiScore', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    expect(scoreComponent.aiScore).toEqual(10);
    scoreComponent.decreasAiScore();
    expect(scoreComponent.aiScore).toEqual(9);
    scoreComponent.decreasAiScore();
    expect(scoreComponent.aiScore).toEqual(8);
  }));

  it('should decrease AI or Player score if the result of the round is 2 or 1', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;

    scoreComponent.checkResult(2);
    expect(scoreComponent.aiScore).toEqual(9);
    scoreComponent.checkResult(1);
    expect(scoreComponent.playerScore).toEqual(9);
  }));

  it('after call of checkpoint if point of player is 0 finalScore should be a message to announce player he lost.', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    scoreComponent.playerScore = 0;
    scoreComponent.checkPoint();
    expect(scoreComponent.finalScore).toEqual('Seems you\'re a looser !');
  }));

  it('after call of checkpoint if point of player is 0 finalScore should be a message to announce player he won.', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    scoreComponent.aiScore = 0;
    scoreComponent.checkPoint();
    expect(scoreComponent.finalScore).toEqual('You won');
  }));

  it('should test that reset method reset the state of the component.', async(() => {
    const fixture = TestBed.createComponent(ScoreComponent);
    const scoreComponent = fixture.debugElement.componentInstance;
    scoreComponent.aiScore = 0;
    scoreComponent.checkPoint();
    expect(scoreComponent.finalScore).toEqual('You won');

    scoreComponent.reset();
    expect(scoreComponent.aiScore).toEqual(10);
    expect(scoreComponent.finalScore).toEqual('');
  }));
});
