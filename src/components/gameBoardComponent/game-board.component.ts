import { Component, OnInit, ViewChild, Output, EventEmitter, PipeTransform, Pipe} from '@angular/core';
import { HandAiComponent } from '../handAiComponent/hand-ai.component';

@Component({
    selector: 'game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.css']
})
export class GameComponent implements OnInit {

    private handPlayer: String = 'Nothing Picked Yet';
    private handAi: String = 'Nothing Picked Yet';

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
                } else if (this.handAi === 'Scissors') {
                    this.sendResult.emit(2);
                } else if (this.handAi === 'Rock') {
                    this.sendResult.emit(3);
                }
                break;
            case 'Paper':
                if (this.handAi === 'Paper') {
                    this.sendResult.emit(3);
                } else if (this.handAi === 'Scissors') {
                    this.sendResult.emit(1);
                } else if (this.handAi === 'Rock') {
                    this.sendResult.emit(2);
                }
                break;
            case 'Scissors':
                if (this.handAi === 'Paper') {
                    this.sendResult.emit(2);
                } else if (this.handAi === 'Scissors') {
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
        this.handPlayer = 'Nothing Picked Yet';
        this.handAi = 'Nothing Picked Yet';
    }
}


@Pipe({name: 'elementToPicture'})
export class ElementToPictureTransform implements PipeTransform {
  transform(element: String): String {
    let pathToImage: String = '/assets/pictures/';
    switch (element) {
        case 'Rock':
            pathToImage = pathToImage + 'rock.png';
            break;
        case 'Paper':
            pathToImage = pathToImage + 'paper.png';
            break;
        case 'Scissors':
            pathToImage = pathToImage + 'scissors.png';
            break;
        default:
            pathToImage = 'Nothing Picked Yet';
            break;
    }
    return pathToImage;
  }
}