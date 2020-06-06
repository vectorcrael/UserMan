import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  userForm: FormGroup;

  //inject the frombuilder, Router and CrudService
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }

  //create a form for editing user information 
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      surname: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['********', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z]).{6,32}")]],   //simplified
      role: ['Select Role', Validators.required],    
    })
  }

  //Send the form data to the service to create an entry in the database
  submitForm() {
    this.crudService.create(this.userForm.value).subscribe(res => {
      console.log('User created!');
      this.router.navigateByUrl('/user/home');
    })
  }

  get username(){
    return this.userForm.get('name');
  }

  get surname(){
    return this.userForm.get('surname');
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

  get role(){
    return this.userForm.get('role');
  }

}
