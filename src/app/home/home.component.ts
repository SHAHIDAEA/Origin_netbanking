import { Component } from '@angular/core';
import { DataService } from '../BankService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
sdata:any
constructor(private ds:DataService){

}
ngOnInit():void{
this.ds.serviceMethod()
// setTimeout(()=>{
//   this.ds.serviceMethod()
// },2000)
this.sdata=this.ds.data
}

}
