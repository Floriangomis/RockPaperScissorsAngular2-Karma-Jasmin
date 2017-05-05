import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'hand-player',
    templateUrl: './hand-player.component.html',
    styleUrls: ['./hand-player.component.css']
})
export class HandPlayerComponent implements OnInit {

    @Output() elementPicked = new EventEmitter();
    @Input() canPlay: boolean = false;

    constructor() {

    }

    ngOnInit() {

    }

    pickScisors() {
        this.elementPicked.emit('Scisors');
    }

    pickRock() {
        this.elementPicked.emit('Rock');
    }

    pickPaper() {
        this.elementPicked.emit('Paper');
    }
}
