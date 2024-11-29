import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Duenio{
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  genero: string;
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class DuenioServiceService {
  private apiUrl ="http://localhost:8080/duenio";

  constructor(private http: HttpClient) { }

  //metodos

  getDuenios():Observable<Duenio[]>{
    return this.http.get<Duenio[]>(this.apiUrl)
  }

  createDuenio(duenio: Duenio):Observable<Duenio>{
    return this.http.post<Duenio>(this.apiUrl, duenio)
  }
  //modifcar  eliminar consulta x id

  // Método para actualizar un dueño
  updateDuenio(duenio: Duenio): Observable<Duenio> {
    // Se hace una solicitud PUT para actualizar el dueño por su id
    return this.http.put<Duenio>(`${this.apiUrl}/${duenio.id}`, duenio);
  }

  // Eliminar dueño
  deleteDuenio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
