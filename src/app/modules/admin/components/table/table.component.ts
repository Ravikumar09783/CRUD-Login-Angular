import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {PageEvent} from '@angular/material/paginator';
// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

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


  restoData: any;




  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit(): void {

      this.auth.getRestoData().subscribe((res: any) => {
        this.restoData = res;
        console.log(res);
      });

  }
  files: File[] = [];

	onSelect(event:any ) {
		console.log(event);
		this.files.push(...event.addedFiles);
    console.log(this.files.forEach((data)=>{return console.log(data.name)
    }))
	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}




  delResto(id: number) {
    this.auth.deleteResto(id).subscribe((del: any) => {
      console.log('Delete', del);
      // this.router.navigate(['admin/table']);
      this.auth.getRestoData().subscribe(()=>{this.ngOnInit()})

    });
  }

  addNew() {
    this.router.navigate(['addresto']);
  }




}
