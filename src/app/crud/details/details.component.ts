import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  selectedUser: User ={ id: 0,
    name: 'default', 
    surname: 'default',
    email: 'email@domain.com',
    password: 'default',
    role: 'general' };
    
  UserId: number;

  constructor(public crudService: CrudService,  
    private route: ActivatedRoute) { }

  loadData(UId: number){
      //get data from the service  
    this.crudService.getById(UId).subscribe((data: User)=>{
      console.log(data);
      this.selectedUser = data;
    }) 
  }

  ngOnInit(): void {
    //get the selected user id from the params
    this.route.params.subscribe(params => {
    this.UserId = params['UserId'];
    });

    this.loadData(this.UserId);
  }

  loadPrevious(){
    //get next record -- to be completed
    this.UserId++;
    this.loadData(this.UserId);
  }

  loadNext(){
    this.UserId--;
    this.loadData(this.UserId);
  }

}
