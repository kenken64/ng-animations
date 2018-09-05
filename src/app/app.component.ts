import { Component } from '@angular/core';
import { 
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divState',[
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('hightlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> hightlighted', animate(400))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('hightlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => hightlighted', animate(300)),
      transition('hightlighted => normal', animate(800)),
      transition('shrunken <=> *',[
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        }))
      , animate(800)
    ])
  ])
  ]
})
export class AppComponent {
  state="normal";
  wildState = "normal";

  title = 'ng-animation';

  onAnimate(){
    this.state=='normal'? this.state = 'hightlighted' : this.state = 'normal';
    this.wildState == 'normal'? this.wildState = 'hightlighted': this.wildState = 'normal'
  }

  onShrink(){
    this.wildState = "shrunken";
  }

  
}
