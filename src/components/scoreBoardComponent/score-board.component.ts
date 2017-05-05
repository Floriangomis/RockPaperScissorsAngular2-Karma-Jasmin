import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'score-board',
    templateUrl: './score-board.component.html',
    styleUrls: [ './score-board.component.css' ]
})
export class ScoreComponent implements OnInit {

    private aiScore: number = 10;
    private playerScore: number = 10;
    private finalScore: String = '';

    private timeBeforeReset: any;
    private startTimeMS: any;
    private timeleft: any;
    private idInterval: any;

    @Output() resetGame = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    checkResult(result: Number) {
        // If the party is already finish you can still spamm Buttons but nothing will happen except.
        if (this.aiScore <= 0 || this.playerScore <= 0) {
            return;
        }

        if (result === 2) {
            this.increaseaiScore();
        } else if (result === 1) {
            this.increasePlayerScore();
        } else {
            return;
        }

        this.checkPoint().then( (value) => {
            if (value) {
                this.resetGame.emit();
            }
        }).catch( (reason) => {
            console.log(reason);
        });
    }

    getTimeLeft(timeOut: any) {
        if ( Number.parseInt((10000 - ( (new Date()).getTime() - this.startTimeMS) ).toFixed(0)) <= 0 ) {
            clearInterval(this.idInterval);
            this.timeleft = undefined;
            return;
        }
        this.timeleft = (( 10000 - ( (new Date()).getTime() - this.startTimeMS ) ) / 1000).toFixed(0)  + ' seconds left';
    }

    timerBeforeResetGame(): Promise<any> {
        let deferred = new Promise( (resolve, reject) => {
            this.startTimeMS = (new Date()).getTime();
            this.timeBeforeReset = setTimeout( () => {
                resolve(true);
            }, 10000);
            this.idInterval = setInterval( () => {
                this.getTimeLeft(this.timeBeforeReset);
            }, 500);
        });
        return deferred;
    }

    checkPoint(): Promise<any> {

        if (this.playerScore === 0) {
            this.finalScore = 'Seems you\'re a looser !';
            return this.timerBeforeResetGame();
        } else if (this.aiScore === 0) {
            this.finalScore = 'You won';
            return this.timerBeforeResetGame();
        } else {
            let deferred = new Promise( (resolve,reject) => {
                resolve(false);
            });
            return deferred;
        }
    }

    increasePlayerScore() {
        this.playerScore = this.playerScore - 1;
    }

    increaseaiScore() {
        this.aiScore = this.aiScore - 1;
    }

    reset() {
        this.aiScore = 10;
        this.playerScore = 10;
        this.finalScore = '';
    }

};
