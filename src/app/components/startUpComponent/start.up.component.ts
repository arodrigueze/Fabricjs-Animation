import { Component } from '@angular/core';
import { StartUpService } from 'src/app/services/start.up.service';
import { startUpAnimation } from 'src/app/const/start.up.component.animation';


@Component({
  selector: 'start-up-component',
  templateUrl: './start.up.component.html',
  styleUrls: ['./start.up.component.scss'],
  animations: [startUpAnimation.animation]
})
export class StartUpComponent {

  private initialMessage: string = '';
  private textState: string = 'active';
  private spinerState: string = 'active';

  constructor(private startUpService: StartUpService) { }

  ngOnInit() {
    this.startUpService.statusMessage.subscribe((message: string) => {
      this.initialMessage = message;
    });
  }

  completeAnimation($event) {
    if ($event.triggerName !== 'rotateSpinner') {
      this.textState = this.textState === 'active' ? 'inactive' : 'active';
    } else {
      this.spinerState = this.spinerState === 'active' ? 'inactive' : 'active';
    }
  }
}
