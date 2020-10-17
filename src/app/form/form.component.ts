import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms';
import { FlameService } from '../flame.service';
import { Fly } from '../fly';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

 getinfo = new Fly();
  FlameForm = this.fb.group({
    name : ['',Validators.required],
    email : ['', [Validators.required, Validators.email]],
    feedback:['', Validators.required],
    comment: [''],
 }); 

  constructor(private fb: FormBuilder,
    private flameService: FlameService,
    ) { }

  ngOnInit(){ 
    this.flameService.getdata()
    .subscribe(
      data=>{
          this.getinfo = data,
          console.log(this.getinfo);
      }
    );
    
   }


  submit() {
    if (this.FlameForm.valid) {
      console.log(this.FlameForm.value);
      this.flameService.post(this.FlameForm.value).
      subscribe(
        data=>{
          this.getinfo = data;
        },
      );
      alert("Form Submitted sucessfully");
    }
  }
  

  }

 

  



