import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SubmitService } from '../ServiceApi/submit.service';
import { Submit } from '../models/submit';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  style: object = {};
    Params: object = {};
    width: number = 100;
    height: number = 100;

  constructor( private submitS : SubmitService,private formBuilder: FormBuilder) { 
    

  }

  // submitData(){
  //   this.submitS.addSubmitData(this.submit);
  // }

  

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else{
          console.log(this.registerForm.value);
      }

      
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      select: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
    
    

    this.submitS.getSubmit().subscribe(submit=>{
      console.log(submit)
    });

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
        value: 10,
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
