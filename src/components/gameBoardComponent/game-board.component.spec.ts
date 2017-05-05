import { TestBed, async } from '@angular/core/testing';

import { GameComponent } from './game-board.component';
import { HandPlayerComponent } from '../handPlayerComponent/hand-player.component';
import { HandAiComponent } from '../handAiComponent/hand-ai.component';

describe('GameComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        HandPlayerComponent,
        HandAiComponent
      ],
    }).compileComponents();
  }));

  it('should create the component GameComponent', async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const gameComponent = fixture.debugElement.componentInstance;
    expect(gameComponent).toBeTruthy();
  }));

  it(`should have the property canUserPlay equal to "false"`, async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const gameComponent = fixture.debugElement.componentInstance;
    expect(gameComponent.canUserPlay).toEqual(false);
  }));

  it(`should have the property canUserPlay equal to "true" After we launch the game`, async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const gameComponent = fixture.debugElement.componentInstance;
    gameComponent.launchGame();
    expect(gameComponent.canUserPlay).toEqual(true);
  }));

  it(`should have the property handPlayer equal to "Rock" after`, async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const gameComponent = fixture.debugElement.componentInstance;
    gameComponent.handleUserPick('Rock');
    expect(gameComponent.handPlayer).toEqual('Rock');
  }));

  it(`should reset all properties when a reset happen`, async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const gameComponent = fixture.debugElement.componentInstance;
    gameComponent.launchGame();
    expect(gameComponent.canUserPlay).toEqual(true);
    gameComponent.handleUserPick('Rock');
    expect(gameComponent.handPlayer).toEqual('Rock');
    gameComponent.reset();
    expect(gameComponent.handPlayer).toEqual('Nothing Picked');
    expect(gameComponent.handAi).toEqual('Nothing Picked');
    expect(gameComponent.canUserPlay).toEqual(false);
  }));
});
