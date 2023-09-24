import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  selectUsuario:UpdateUsuarioDTO={}; //

  constructor(private usuarioService: UsuarioService, private form: FormBuilder) {
    {
      this.UsuarioForm = this.form.group({
        
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        clave: ['', Validators.required],
        identificacion: ['', Validators.required],
        celular: ['', Validators.required],
        correo: ['', Validators.required],
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
      const id = this.selectUsuario.id_usuarios ?? 0;
     
       const data: UsuarioDTO = {
        nombres: this.UsuarioForm.get('nombres')?.value,
        apellidos: this.UsuarioForm.get('apellidos')?.value,
        correo: this.UsuarioForm.get('correo')?.value,
        clave: this.UsuarioForm.get('clave')?.value,
        celular: this.UsuarioForm.get('celular')?.value,
        identificacion: this.UsuarioForm.get('identificacion')?.value,
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

    eliminarUsuario(id_usuarios: number):void {
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
          this.usuarioService.eliminarUsuario(id_usuarios).subscribe(data => {
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

   

}
