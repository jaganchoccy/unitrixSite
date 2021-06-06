import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xplore',
  templateUrl: './xplore.component.html',
  styleUrls: ['./xplore.component.css']
})
export class XploreComponent implements OnInit {
  style: object = {};
  Params: object = {};
  width: number = 100;
  height: number = 100;
  constructor() { }

  ngOnInit() {
    this.style = {
      'position': 'absolute',
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
        value: 20,
        "density": {
          "enable": true,
          "value_area": 1000
            }
    },
    color: {
        value: '#9e9e9e'
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
        value: 0.5,
        "anim": {
          "enable": false,
        }
    },
    move:{
        speed: 3
    }, 
    size:{
        value:4
    }
    }

}
  }

}
