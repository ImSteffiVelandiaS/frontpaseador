import { Component } from '@angular/core';
import { DuenioServiceService, Duenio } from '../../duenio-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duenio-list',
  templateUrl: './duenio-list.component.html',
  styleUrls: ['./duenio-list.component.css']
})
export class DuenioListComponent {
  duenio: Duenio[] = [];
  selectedDuenio: Duenio = {} as Duenio;
  isModalOpen = false; // Bandera para mostrar/ocultar el modal

  constructor(private duenioservice: DuenioServiceService, private router: Router ) {}

  ngOnInit(): void {
    this.duenioservice.getDuenios().subscribe((data) => (this.duenio = data));
  }

  openModal(due: Duenio): void {
    this.selectedDuenio = { ...due }; // Copia el usuario seleccionado
    this.isModalOpen = true; // Muestra el modal
  }

  closeModal(): void {
    this.isModalOpen = false; // Oculta el modal
  }

  updateDuenio(): void {
    this.duenioservice.updateDuenio(this.selectedDuenio).subscribe(
      () => {
        const index = this.duenio.findIndex((d) => d.id === this.selectedDuenio.id);
        if (index !== -1) {
          this.duenio[index] = { ...this.selectedDuenio };
        }
        alert('Usuario modificado con éxito');
        this.closeModal(); // Cierra el modal al finalizar
      },
      (error) => {
        console.error('Error al modificar el usuario:', error);
        alert('Hubo un error al modificar el usuario');
      }
    );
  }



  deleteDuenio(id: number): void {
    console.log("Funcion delete")
    if (confirm('¿Estás seguro de que deseas eliminar este dueño?')) {
      this.duenioservice.deleteDuenio(id).subscribe(
        () => {
          this.duenio = this.duenio.filter((due) => due.id !== id); // Elimina el dueño de la lista
          alert('Dueño eliminado con éxito');
          this.router.navigate(['/'])
        },
        (error) => {
          console.error('Error al eliminar el dueño:', error);
          alert('Hubo un error al eliminar el dueño');
          this.router.navigate(['/'])
        }
      );
    }
  }
}
