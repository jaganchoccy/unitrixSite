import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/Observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

    style: object = {};
    Params: object = {};
    width: number = 100;
    height: number = 100;
 
    ngOnInit() {
        this.style = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.Params = {
            
			
        particles: {
          number: {
              value: 30,
              "density": {
                "enable": true,
                "value_area": 1000
                  }
          },
          color: {
              value: '#000000'
          },
          shape: {
              type: 'polygon',
          },
          interactivity: {
            events: {
              onclick:{
                "enable" : false,
              }
            }},
           
          opacity:{
              value: 1,
              "anim": {
                "enable": false,
              }
          },
          move:{
              speed: 2
          }, 
          size:{
              value:4
          }
          }

  }
 
}

}
