import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUsuarioDTO, UsuarioModel } from '../entities/Usuario';
import { UsuarioDTO } from '../Dto/Usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly API_URL:string="http://localhost:3000/api/usuarios/listarusuario";
  readonly apiUrl:string="http://localhost:3000/api/usuarios";


  constructor(private http:HttpClient) { }

  getUsuario(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.API_URL);
  }

  getUsuarioid(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${id}`);
  }


  crearUsuario(usuario: UsuarioModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/crearusuario`, usuario);
  }



  /* eliminarMensaje(id: number): Observable<MensajeModel[]> {
    return this.http.delete<MensajeModel>('http://localhost:3000/mensajes' + id ).pipe(
      map(data => data.listado)
    );
  } */

  eliminarUsuario(id_usuarios: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/eliminarusuario/${id_usuarios}`);
  }

 /*  updateUsuario(usuario: UsuarioDTO,id: UsuarioModel['id'] ): Observable<any>{
    const url = `${this.apiUrl}/actualizarusuario/${id}`;
    return this.http.put<UsuarioModel>(url, usuario);
  }
 */
  updateUsuario(id: number, report: UsuarioDTO): Observable<any>{
    return this.http.put(`${this.apiUrl}/actualizarusuario/${id}`, report )
  }
  
  
}
