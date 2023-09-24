import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { UsuarioDTO } from '../../Dto/Usuario.dto';
import { UsuarioModel, UpdateUsuarioDTO } from '../../entities/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  UsuarioForm: FormGroup;
  listadousuario: UsuarioModel[] = []; //poner
  selectUsuario:UpdateUsuarioDTO={nombre:'',apellido:''}; //

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
   

    updateUsuario(): void {
      const id = this.selectUsuario.id ?? 0;
     
      const data: UsuarioDTO = {
        nombre: this.UsuarioForm.get('nombre')?.value,
        apellido: this.UsuarioForm.get('apellido')?.value,
        cedula: this.UsuarioForm.get('cedula')?.value,
        departamento: this.UsuarioForm.get('departamento')?.value,
      };
    
      this.usuarioService.updateUsuario(id, data).subscribe((response) => {
        console.log(response);
        this.getUser();
      });
    }
    
    
    
  

    editusuario(lista:UsuarioModel){
      console.log('Datos recibidos para editar:', lista);
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
