import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { itemService } from './service';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/map'
declare var $:any;

@Component({
  selector: 'first',
  templateUrl:'./app/first/first.html',
  styleUrls:['./app/first/style.css'],
  providers:[itemService]

})

export class firstComponent implements OnInit,AfterViewInit{ 
  public router;
  public ItemService;
  public allDyno;
  public dynName1=[];
  public dynName2=[];
  constructor(ItemService:itemService,router: Router) 
  {
    this.router = router;
    this.ItemService=ItemService;
  }
  //Function for onload
  ngOnInit() { this.getList(); }
  //Function for foundation
  ngAfterViewInit(){ $(document).foundation()}
  //Function for fetching JSON
  getList() 
  {
    this.ItemService.getList().subscribe(
      data => { this.allDyno = data
        Object.entries(data[0]).forEach(
          ([key, value]) => {
            this.dynName1.push(key);
          });
      },
      err => console.error(err),
      () => console.log('done loading allDyno')
      );  
  }
  //Function for prevoius page
  backMov(){
    let myButtonClasses = document.getElementById("toggDiv").classList;
    if (myButtonClasses.contains("showDiv")) {
      myButtonClasses.remove("showDiv");
    } else {
      myButtonClasses.add("closeDiv");
    }
    let myClasses = document.getElementById("goingHide").classList;
    if (myClasses.contains("closeDiv")) 
    {
      myClasses.remove("closeDiv");
    }
    else
    {
      myClasses.add("showDiv");
    }
  }
  //Function for Desktop and Tab 
  getValues(listName1:string) 
  {
    var getDynName=listName1.innerText;
    this.dynName2=[];
    var getDyno=this.allDyno;
    Object.entries(getDyno[0]).forEach(
      ([key, value]) => {
        if(getDynName==key){
          this.dynName2.push(value);
        }
      });
  }
  //Function for mobile
  getValuesSmal(listName2:string) 
  {
    let myButtonClasses = document.getElementById("toggDiv").classList;
    if (myButtonClasses.contains("closeDiv")) {
      myButtonClasses.remove("closeDiv");
    } else {
      myButtonClasses.add("showDiv");
    }
    let myClasses = document.getElementById("goingHide").classList;
    if (myClasses.contains("showDiv")) 
    {
      myClasses.remove("showDiv");
    }
    else
    {
      myClasses.add("closeDiv");
    }
    let getDynName=listName2.innerText;
    this.dynName2=[];
    let getDyno=this.allDyno;
    Object.entries(getDyno[0]).forEach(
      ([key, value]) => {
        if(getDynName==key){
          this.dynName2.push(value);
        }
      });
  }
}