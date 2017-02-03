import { Routes,RouterModule }   from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {FormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import { firstComponent }   from './first/first';
import { containerComponent }   from './container/container';
import {itemService} from './first/service';




@NgModule({
   imports:      [ 
        HttpModule,
        FormsModule,
        BrowserModule,RouterModule.forRoot
  					([
                { path: '', component: firstComponent },
      					 
      					{ path: 'first', component: firstComponent },
      			 ]) 
    			],
  declarations: [ containerComponent,firstComponent],
  providers:[itemService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [containerComponent]
  
})
export class AppModule { }
