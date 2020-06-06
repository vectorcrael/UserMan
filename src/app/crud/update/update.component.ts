import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {
  userForm: FormGroup;
  selectedUser: Observable<User>;
  UserId: number;
  
  //inject the frombuilder, Router and CrudService
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService,
    private route: ActivatedRoute
  ){ }

   loadData(UId: number):any {
    //get data from the service  
    this.selectedUser =this.crudService.getById(UId)
    .pipe(
      tap(selectedUser => this.userForm.patchValue(selectedUser))
    );
}

  //create a form for editing user information 
  ngOnInit(): void {
      //get the selected user id from the params
      this.route.params.subscribe(params => {
        this.UserId = params['UserId'];
      });

      this.loadData(this.UserId);

      this.userForm = this.fb.group({
        name: ['', [Validators.required,Validators.minLength(3)]],
        surname: ['', [Validators.required,Validators.minLength(3)]],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z]).{6,32}")]],   //simplified
        role: ['', Validators.required] });
  }

  //Send the form data to the service to create an entry in the database
  submitForm() {
    console.log("this.userForm.value BEING SUBMITTED TO THE FORM");
    console.log(this.userForm.value);

/*
    var formUser =  this.userForm.value;
    var validateUser = {
      id: this.selectedUser.id,
      name: formUser.name  ? formUser["name"] :  
    
  }
        
    = { id: 0,
      name: 'default', 
      surname: 'default',
      email: 'email@domain.com',
      password: 'default',
      role: 'general' };
*/
    this.crudService.update(this.UserId, this.userForm.value).subscribe(res => {
      console.log('User updated!');
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

