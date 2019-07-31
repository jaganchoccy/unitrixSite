import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Submit } from '../models/submit';
import { SubmitService } from '../ServiceApi/submit.service';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css']
})
export class StartedComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  submit:Submit[];

  constructor(private submitS : SubmitService,private formBuilder: FormBuilder) { }

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }else{
        console.log(this.registerForm.value);
        this.submitS.addSubmitData(this.registerForm.value);
       alert('form submitted')
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
  }

}
