import { TestBed, async } from '@angular/core/testing';

import { HandPlayerComponent } from './hand-player.component';

describe('HandPlayerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HandPlayerComponent
      ],
    }).compileComponents();
  }));

  it('should create the component Handplayer', async(() => {
    const fixture = TestBed.createComponent(HandPlayerComponent);
    const handPlayerComponent = fixture.debugElement.componentInstance;
    expect(handPlayerComponent).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(HandPlayerComponent);
    const handPlayerComponent = fixture.debugElement.componentInstance;
    expect(handPlayerComponent.canPlay).toEqual(false);
  }));


});
