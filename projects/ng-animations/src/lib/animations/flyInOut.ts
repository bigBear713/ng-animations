import {
    animate,
    animation,
    AnimationReferenceMetadata,
    AnimationStyleMetadata,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger,
    useAnimation
} from '@angular/animations';

const flyInStyle: AnimationStyleMetadata = style({ transform: 'translateX(-100%)' });
const flyOutStyle: AnimationStyleMetadata = style({ transform: 'translateX(100%)' });

export const flyIn: AnimationReferenceMetadata = animation([
  flyInStyle,
  animate('{{ time }}')
]);

export const flyOut: AnimationReferenceMetadata = animation([
  animate('{{ time }}', flyOutStyle)
]);

export const flyInOutTrigger: AnimationTriggerMetadata = trigger('flyInOut', [
  transition(':enter', [
    useAnimation(flyIn, { params: { time: '.2s' } })
  ]),
  transition(':leave', [
    useAnimation(flyOut, { params: { time: '.2s' } })
  ])
]);
