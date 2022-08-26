import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
})
export class EditTableComponent implements OnInit {
  updateRestoData= new FormGroup({
    name: new FormControl(''),
    address:new FormControl(''),
    outlets: new FormControl('')

  })
  constructor(
    private active:ActivatedRoute,
    private auth:AuthService,
    private route:Router,
    ) { }

  ngOnInit(): void {

    console.log("ActivatedRoute",this.active.snapshot.params.id);
    this.auth.getCurrentResto(this.active.snapshot.params.id).subscribe((res:any)=>{

      this.updateRestoData= new FormGroup({
        name: new FormControl(res['name']),
        address:new FormControl(res['address']),
        outlets: new FormControl(res['outlets'])

      })
    })

  }
  updateResto(){
    if(this.updateRestoData.value.name && this.updateRestoData.value.address && this.updateRestoData.value.outlets){
      console.log("id",this.active.snapshot.params['id'])
      console.log("data",this.updateRestoData.value)
      console.log(this.updateRestoData,"+++++++++++++++")
      this.auth.updateRestoDatas(this.active.snapshot.params.id,this.updateRestoData.value).subscribe((res:any)=>{console.log("ABC",res)})
      this.route.navigate(['admin/table',{name:"ravikumar"}])
      console.log("PARAMS",this.active.snapshot)

    }
  else{
    alert("Something is Missing Please check")
  }

  }


}
