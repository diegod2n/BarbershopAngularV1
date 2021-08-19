import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-citaadd',
  templateUrl: './citaadd.component.html',
  styleUrls: ['./citaadd.component.css']
})
export class CitaaddComponent implements OnInit {
 
  time: NgbTimeStruct = {hour: 13, minute: 0, second: 0};
  hourStep = 1;
  minuteStep = 0;


  model: NgbDateStruct;
  today = this.calendar.getToday();

  cliente:any;
  usuario: any;
  constructor(private calendar: NgbCalendar) { }


  ngOnInit(): void {
   
    
  }

   m = this.getLoginDataByKey('user_id');
  getLoginDataByKey(key){
    let data = JSON.parse(localStorage.getItem("login_data"));
    if(data.hasOwnProperty(key)){
      return data[key];
    }
    return null;
  }


  clicksave(){
    const m={
      'model':this.model.day+'/'+this.model.month+'/'+this.model.year,
      'time':this.time.hour+':'+'00',
      'cliente':this.cliente,
      'usuario':this.m

    }

    console.log(m);
  }

}
