import { Component } from '@angular/core';
import { DuenioServiceService, Duenio } from '../../duenio-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
  constructor(private duenioService: DuenioServiceService, private router: Router){}

  onSubmit():void{
    this.duenioService.createDuenio(this.duenio).subscribe({
      next:(result) => {
        console.log("Dueño: ", this.duenio)
        console.log("Result: ", result);
        alert('Dueño creado con exito')
        this.router.navigate(['/'])
      }, error:(e)=>{
          console.log("error no se creo por ", e)
          alert("Hubo un error al crear el Dueño")
      }
    })
  }

}
