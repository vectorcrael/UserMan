/*
  The crud module is responsible for all operations that we will do on the users
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [HomeComponent, DetailsComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [HomeComponent, DetailsComponent, CreateComponent, UpdateComponent] 
})
export class CrudModule { }
