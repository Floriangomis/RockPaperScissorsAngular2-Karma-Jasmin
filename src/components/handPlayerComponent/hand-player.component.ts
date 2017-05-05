import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'hand-player',
    templateUrl: './hand-player.component.html',
    styleUrls: ['./hand-player.component.css']
})
export class HandPlayerComponent implements OnInit {

    @Output() elementPicked = new EventEmitter();
    @Input() canPlay: Boolean = false;

    constructor() {

    }

    ngOnInit() {

    }

    pickScissors() {
        this.elementPicked.emit('Scissors');
    }

    pickRock() {
        this.elementPicked.emit('Rock');
    }

    pickPaper() {
        this.elementPicked.emit('Paper');
    }
}
