import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'container',
  templateUrl:'./app/container/container.html',
   styleUrls:['./app/container/css/container.css']
       
})
export class containerComponent implements AfterViewInit { 

	 ngAfterViewInit(){ $(document).foundation()}

 }