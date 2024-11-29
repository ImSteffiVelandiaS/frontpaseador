import { Component } from '@angular/core';
import { DuenioServiceService,Duenio } from '../../duenio-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-duenio-list',
  templateUrl: './duenio-list.component.html',
  styleUrl: './duenio-list.component.css'
})
export class DuenioListComponent {
  duenio: Duenio[]=[];

  constructor(private duenioservice: DuenioServiceService){}

  ngOnInit():void{
    this.duenioservice.getDuenios().subscribe((data) =>(this.duenio=data));
    console.log("data: ", this.duenio);
  }
}
