import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUsuarioDTO, UsuarioModel } from '../entities/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly API_URL:string="http://localhost:3000/usuarios/listarusuario";
  readonly apiUrl:string="http://localhost:3000/usuarios";


  constructor(private http:HttpClient) { }

  getUsuario(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.API_URL);
  }
  crearUsuario(usuario: UsuarioModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/crearusuario`, usuario);
  }



  /* eliminarMensaje(id: number): Observable<MensajeModel[]> {
    return this.http.delete<MensajeModel>('http://localhost:3000/mensajes' + id ).pipe(
      map(data => data.listado)
    );
  } */

  eliminarUsuario(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/eliminarusuario/${id}`);
  }

  updateUsuario(usuario: UpdateUsuarioDTO,id: UsuarioModel['id'] ): Observable<UsuarioModel>{
    const url = `${this.apiUrl}/actualizarusuario/${id}`;
    return this.http.put<UsuarioModel>(url, usuario);
  }
  
  
}
