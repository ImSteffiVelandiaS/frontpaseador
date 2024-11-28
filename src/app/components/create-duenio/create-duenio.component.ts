import { Component } from '@angular/core';
import { DuenioServiceService, Duenio } from '../../duenio-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-duenio',
  templateUrl: './create-duenio.component.html',
  styleUrl: './create-duenio.component.css'
})
export class CreateDuenioComponent {
  duenio:Duenio={
    id: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    genero: '',
    email:''
  }
  constructor(private duenioService: DuenioServiceService){}

  onSubmit():void{
    this.duenioService.createDuenio(this.duenio).subscribe({
      next:(result) => {
        alert('Dueño creado con exito')
      }, error:(e)=>{
          console.log("error no se creo por ", e)
          alert("Hubo un error al crear el Dueño")
      }
    })
  }

}
