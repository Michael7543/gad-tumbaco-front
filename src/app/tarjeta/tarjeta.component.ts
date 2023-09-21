import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { UsuarioService } from '../services/usuario.service';
import { UpdateUsuarioDTO, UsuarioModel } from '../entities/Usuario';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {

  UsuarioForm: FormGroup;
  listadousuario: UsuarioModel[] = []; //poner
  selectUsuario:UpdateUsuarioDTO={}; //

  constructor(private usuarioService: UsuarioService, private form: FormBuilder,private messageService: MessageService) {
    {
      this.UsuarioForm = this.form.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        cedula: ['', Validators.required],
        departamento: ['', Validators.required],

      })
    }


  }

    ngOnInit(): void {
      this.getUser();
     
    }

    

    getUser() {
      this.usuarioService.getUsuario().subscribe(data => {
        this.listadousuario = data;
        console.log(this.listadousuario)
      });
    }
    agregarUsuario() {
      let usuario: UsuarioModel = this.UsuarioForm.value
      this.usuarioService.crearUsuario(usuario).subscribe(data => {
        this.getUser();
        console.log(usuario)
      })
    }
    /* updateMensaje(id: number) {
      let mensaje: MensajeModel = this.MensajeForm.value
      this.mensajeService.updateMensaje(id, mensaje).subscribe(data => {
        this.getMensaje();
      })
    } */
    updateUsuario(): void {
      const id = this.selectUsuario.id ?? 0;
      const data = this.UsuarioForm.value;
    
      this.usuarioService.getUsuario().pipe(
        switchMap((response) => {
          console.log(response);
          return this.usuarioService.updateUsuario(data, id);
        })
      ).subscribe((response) => {
        console.log(response);
        this.getUser();
      });
    }
    
    
  

    editusuario(lista:UsuarioModel){
      this.selectUsuario = lista;
    }
 

    eliminarUsuario(id: number):void {
      Swal.fire({
        title: '¿Está seguro?',
        text: 'No podrá revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.usuarioService.eliminarUsuario(id).subscribe(data => {
            if (data && data) {
              this.listadousuario = data;
            }
            this.getUser();
          })
          Swal.fire(
            'Eliminado',
            'El usuario ha sido eliminado',
            'success'
          )
        }
      }
      )

      

    

    } 

    getEventValue(event: any): string {
      return event.target.value;
    }

    show() {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });

    }



}
