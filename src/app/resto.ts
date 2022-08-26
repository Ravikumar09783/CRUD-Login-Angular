export class Resto {
  id!:string;
  address!:string;
  name!:string;
  outlets!:string;

  constructor(id:string, name:string,address:string,outlets:string){
    this.id=id;
    this.address=address;
    this.name=name;
    this.outlets=outlets;
  }

}
