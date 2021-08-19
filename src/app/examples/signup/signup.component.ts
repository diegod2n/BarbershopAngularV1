import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'app/http-service.service';
import { CartServiceService } from 'app/service/cart-service.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    test: Date = new Date();
    focus;
    focus1;
    isOpenLoginDialog = false;
    isLogin = false;
    welcomeUsername: "";
    mobile: '12345687';
    password: 'diegod2c';


    constructor(public http:HttpServiceService, private router:Router){
       /* let request = {}
        this.http.postRequest("api/status",request).subscribe(data=>{
            console.log("test",data);
        },error=>{
          alert("Server connection error "+error)
        })
        if(this.http.isLogin()){
          this.isLogin = true;
          this.welcomeUsername = this.http.getLoginDataByKey("name");
        }
        if(this.http.isLogin()){
          this.isLogin = true;
          this.welcomeUsername = this.http.getLoginDataByKey("name");
        }*/
       
      }
  
    loginUserCheck() {
        
        if (this.mobile == null) {
            alert("Name should not be empty");
            return;
        }
        if (this.password == null) {
            alert("Password should not be empty");
            return;
        }
        let request ={
            "email": this.mobile,
            "password":this.password
          }
          this.http.postRequest('api/login/user',request).subscribe(data=>{
            console.log(data.user_profile_details.name);
              if(data.hasOwnProperty("token")){
                this.http.setLoginToken(data['token']);
                this.http.setiduser(data.user_profile_details.user_id);
                this.http.setLoginData(data);
                this.welcomeUsername = this.http.getLoginDataByKey("name");
                
                this.isLogin = true;
                this.isOpenLoginDialog = false;
                this.router.navigateByUrl('/');
              }
          },error=>{
            alert("Eror in login "+error);
          })
      

    }
    ngOnInit() {
     
    }

   
}







