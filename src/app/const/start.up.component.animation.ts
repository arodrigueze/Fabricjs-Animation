import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

export const startUpAnimation: any = {
  animation:
  [
  trigger('blinkMessage', [
    state('active', style({
      opacity: 1,
    })),
    state('inactive', style({
      opacity: 0.3,
    })),
    transition('* => *', [
      animate('2s')
    ]),
  ]),
  trigger('rotateSpinner', [
    state('active', style({
      transform: 'rotate(0deg)'
    })),
    state('inactive', style({
      transform: 'rotate(360deg)'
    })),
    transition('active => inactive', [
      animate('5s')
    ]),
    transition('inactive => active', [
      animate('0s')
    ]),
  ]),
  trigger('closeContainer', [
    transition(':leave', [
      animate('5s', style({ opacity: 0 }))
    ]),
  ])
]
};
