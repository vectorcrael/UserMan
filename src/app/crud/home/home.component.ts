import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User } from '../user';

//this selector will be used in the app.
@Component({
  selector: 'home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  users: User[] = [];

  constructor(public crudService: CrudService) { }

  loadData(){
      //get data from the service  
    this.crudService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    }) 
  }

  ngOnInit(): void {
   this.loadData();
  }

  reloadUsers(){
    this.loadData();
  }

  onRemove(user){
     let index =this.users.indexOf(user);
     this.crudService.delete(user.id).subscribe(
       () =>console.log('Employee Deleted: '+ user.id),
       (err) => console.log(err)
     );
     this.users.splice(index,1);
  }

  //when data is large it may be useful to track the users by their id
  trackCourse(index, user){
    return user? user.id: undefined;
  }

}
