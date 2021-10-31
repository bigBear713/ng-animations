import {
    flyIn,
    flyInOutTrigger,
    flyOut
} from 'ng-animations';

import {
    transition,
    trigger,
    useAnimation
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    flyInOutTrigger,
    trigger('cusFlyInOut', [
      transition(':enter', [
        useAnimation(flyIn, { params: { time: '0.3s' } })
      ]),
      transition(':leave', [
        useAnimation(flyOut, { params: { time: '0.3s' } })
      ])
    ])
  ]
})
export class AppComponent {

  itemList: any[] = Array.from(new Array(10));

  onAddItem(): void {
    this.itemList.push(...Array.from(new Array(1)));
  }

  onDecreaseItem(): void {
    this.itemList.pop();
  }


}
