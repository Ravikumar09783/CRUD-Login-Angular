import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forget:boolean=false;
  faLock = faLock;
  constructor(
    private auth : AuthService
  ) {}

  forgot= new FormGroup({
    email: new FormControl('',Validators.required)
  })

  ngOnInit(): void {}

  Forgot(){
    // console.log(this.forgot.value)

    this.auth.forgotPassword().subscribe((res:any)=>{

    })
  }
}
