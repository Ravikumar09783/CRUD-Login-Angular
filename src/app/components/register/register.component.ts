import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faLock=faLock;
  loginForm= new FormGroup({
    uername: new FormControl('',Validators.minLength(3)),
    email: new FormControl('',Validators.minLength(3)),
    password: new FormControl('',Validators.minLength(3))

  })


  sha512(str:string) {
    return crypto.subtle
      .digest("SHA-512", new TextEncoder().encode(str))
      .then((buf) => {
        return Array.prototype.map
          .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
          .join("");
      });
  }

  // sha512("Ravi").then((x) => console.log(x));
  // sha512("Ravi").then((x) => console.log(x));

  constructor() { }

  ngOnInit(): void {

  }


  onSubmit(){
    console.log(this.loginForm.value)
    var a:any =this.sha512(this.loginForm.value.password).then((x) => {return x});
    console.log("value of a",a.__zone_symbol__value);

    // this.loginForm.value.password=this.sha512(this.loginForm.value.password).then((x) => {return x});
    // this.loginForm.value.password=123123



    
    console.log(this.loginForm.value)

  }



}
