import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {
  createNewResto=new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    outlets: new FormControl('',Validators.required)

  })

  constructor(
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addRestaurant(){
    if(this.createNewResto.value.name && this.createNewResto.value.address  && this.createNewResto.value.outlets){
      this.auth.createNewRestaurant(this.createNewResto.value).subscribe((res)=>{console.log("OK",res)})
      this.createNewResto.reset({});
      this.router.navigate(['admin/table'])
    }
    else{
      alert("Please fill all the details")
    }
  }

}
