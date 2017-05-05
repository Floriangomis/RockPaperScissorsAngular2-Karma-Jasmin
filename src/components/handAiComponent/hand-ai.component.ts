import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hand-ai',
    templateUrl: './hand-ai.component.html',
    styleUrls: ['./hand-ai.component.css']
})
export class HandAiComponent implements OnInit {
    private arrayOfElements: [String] = ['Rock', 'Paper', 'Scisors'];

    constructor() { }

    ngOnInit() { }

    randomlyPickElement(): String {
       return this.arrayOfElements[ Math.floor( Math.random() * this.arrayOfElements.length ) ];
    }

}
