import { TestBed, async } from '@angular/core/testing';

import { HandAiComponent } from './hand-ai.component';


describe('HandAiComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HandAiComponent
      ],
    }).compileComponents();
  }));

  it('should create the component HandAiComponent', async(() => {
    const fixture = TestBed.createComponent(HandAiComponent);
    const handAiComponent = fixture.debugElement.componentInstance;
    expect(handAiComponent).toBeTruthy();
  }));

  it('randomlyPickElement should return an element randomly from the array of elements', async(() => {
    const fixture = TestBed.createComponent(HandAiComponent);
    const handAiComponent = fixture.debugElement.componentInstance;
    let result = undefined;
    expect(result).toEqual(undefined);
    result = handAiComponent.randomlyPickElement();
    // Check first that it's not undefined anymore
    expect(result).toBeDefined();
    // Then check the value
    expect(handAiComponent.arrayOfElements).toContain(result);
  }));

});
