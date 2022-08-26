import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logData:any;
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }


  onSubmit(): void {
    // var temp;
    // var a= this.auth.getLoginData()
    // a.subscribe((res)=>{
    //   temp=res;
    // // console.log("TEMPO",temp)

    // })

    if (this.loginForm.valid) {

      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }




  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     // console.log(this.loginForm.value.email,"Login form name")

  //     this.auth.getLoginData().subscribe((res:any)=>{
  //       res.forEach((data:any,index:number)=>{
  //         // console.log(data.name)
  //         // if(data.email===this.loginForm.value.email && data.password===this.loginForm.value.password){
  //         //   this.router.navigate(['/admin'])
  //         // }
  //         this.logData=res

  //       }
  //       )
  //       console.log(console.log("logData",this.logData),
  //       console.log(this.logData[0].email)

  //     );
  //     })

  //     for(let i=0;i<this.logData.length; i++){
  //       if(this.logData[i].email==this.loginForm.value.email && this.logData[i].password===this.loginForm.value.password){
  //         this.router.navigate(['/admin'])
  //         console.log("+++++++++++++++++++++")
  //         this.auth.login(this.loginForm.value).subscribe(
  //                 (result) => {
  //                   console.log(result);
  //                   this.router.navigate(['/admin']);
  //                 })



  //       }
  //     }





      // this.auth.login(this.loginForm.value).subscribe(
      //   (result) => {
      //     console.log(result);
      //     this.router.navigate(['/admin']);
      //   },
      //   (err: Error) => {
      //     alert(err.message);
      //   }
      // );
    }

