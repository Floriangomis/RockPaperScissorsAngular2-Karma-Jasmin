import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HandAiComponent } from '../handAiComponent/hand-ai.component';

@Component({
    selector: 'game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.css']
})
export class GameComponent implements OnInit {

    private handPlayer: String = 'Nothing Picked';
    private handAi: String = 'Nothing Picked';
    @Output() sendResult = new EventEmitter();
    @ViewChild(HandAiComponent) handAiComponent: HandAiComponent;
    private canUserPlay: Boolean = false;

    constructor() { }

    ngOnInit() { }

    handleUserPick(pick: String) {
        this.handPlayer = pick;
        this.handAi = this.handAiComponent.randomlyPickElement();

        this.compareTwoPick();
    }

    compareTwoPick(): void {
        switch (this.handPlayer) {
            case 'Rock':
                if (this.handAi === 'Paper') {
                    this.sendResult.emit(1);
                } else if (this.handAi === 'Scisors') {
                    this.sendResult.emit(2);
                } else if (this.handAi === 'Rock') {
                    this.sendResult.emit(3);
                }
                break;
            case 'Paper':
                if (this.handAi === 'Paper') {
                    this.sendResult.emit(3);
                } else if (this.handAi === 'Scisors') {
                    this.sendResult.emit(1);
                } else if (this.handAi === 'Rock') {
                    this.sendResult.emit(2);
                }
                break;
            case 'Scisors':
                if (this.handAi === 'Paper') {
                    this.sendResult.emit(2);
                } else if (this.handAi === 'Scisors') {
                    this.sendResult.emit(3);
                } else if (this.handAi === 'Rock') {
                    this.sendResult.emit(1);
                }
                break;
            default:
                break;
        }
    }

    launchGame() {
        this.canUserPlay = true;
    }

    reset() {
        this.canUserPlay = false;
        this.handPlayer = 'Nothing Picked';
        this.handAi = 'Nothing Picked';
    }
}
