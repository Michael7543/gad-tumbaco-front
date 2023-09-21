import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../Dto/Mensaje.dto';
import { Observable } from 'rxjs';
import { MensajeModel, UpdateMensajeDTO } from '../entities/Mensaje';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  readonly API_URL:string="http://localhost:3000/mensajes/listarmensaje";
  readonly apiUrl:string="http://localhost:3000/mensajes";


  constructor(private http:HttpClient) { }

  getListado(): Observable<MensajeModel[]> {
    return this.http.get<MensajeModel[]>(this.API_URL);
  }
  createMensaje(mensaje: MensajeModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/crearmensaje`, mensaje);
  }



  /* eliminarMensaje(id: number): Observable<MensajeModel[]> {
    return this.http.delete<MensajeModel>('http://localhost:3000/mensajes' + id ).pipe(
      map(data => data.listado)
    );
  } */
  eliminarMensaje(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/eliminarmensaje/${id}`);
  }

  updateMensaje(mensaje: UpdateMensajeDTO,id: MensajeModel['id'] ): Observable<MensajeModel>{
    const url = `${this.apiUrl}/actualizarmensaje/${id}`;
    return this.http.put<MensajeModel>(url, mensaje);
  }
  
  
}
