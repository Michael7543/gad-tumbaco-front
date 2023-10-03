import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioDTO } from '../../Dto/Usuario.dto';
import { UsuarioModel, UpdateUsuarioDTO } from '../../entities/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { EstadoModel } from '../../entities/Estado';
import { RolesModel } from '../../entities/Roles';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  UsuarioForm: FormGroup;
  listadousuario: UsuarioModel[] = []; //poner
  selectUsuario:UpdateUsuarioDTO={}; //
  listadoestado:EstadoModel[]=[];
  listadoroles: RolesModel[]=[];

  constructor(private usuarioService: UsuarioService, private form: FormBuilder) {
    {
      this.UsuarioForm = this.form.group({
        
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        clave: ['', Validators.required],
        identificacion: ['', Validators.required],
        celular: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email, this.validarFormatoCorreo]],
        id_estado: ['', Validators.required],
        id_roles: ['', Validators.required],
      })
    }


  }

    ngOnInit(): void {
      this.getUser();
      this.getEstado();
      this.getRoles();
      
     
    }

    

    getUser() {
      this.usuarioService.getUsuario().subscribe(data => {
        this.listadousuario = data;
        console.log(this.listadousuario)
      });
    }

    getEstado() {
      this.usuarioService.getEstado().subscribe(data => {
        this.listadoestado = data;
        console.log(this.listadoestado)
      });
    }

    getRoles() {
      this.usuarioService.getRoles().subscribe(data => {
        this.listadoroles = data;
        console.log(this.listadoroles)
      });
    }
    
    agregarUsuario() {
      let usuario: UsuarioModel = this.UsuarioForm.value;
      this.usuarioService.crearUsuario(usuario).subscribe(data => {
        this.getUser();
        console.log(usuario);
    
        // Mostrar una alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'El usuario se ha creado correctamente.',
        });
      });
    }
   

    updateUsuario(): void {
      const id = this.selectUsuario.id_usuarios ?? 0;
     
       const data = this.UsuarioForm.value;
    
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

    onInput(event: any) {
      const input = event.target;
      const value = input.value;
    
      // Remover caracteres no numéricos excepto el símbolo "-"
      const numericValue = value.replace(/[^\d-]/g, '');
      input.value = numericValue;
    }

    onInputletras(event: any) {
      const input = event.target;
      const value = input.value;
      
      // Remover caracteres no alfabéticos
      const alphabeticValue = value.replace(/[^A-Za-z\s]/g, '');
      input.value = alphabeticValue;
    }

    validarFormatoCorreo(control: FormControl) {
      if (control.touched) { // Verificar si el campo ha sido tocado por el usuario
        const email = control.value;
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    
        if (!pattern.test(email)) {
          return { formatoCorreoInvalido: true };
        }
      }
    
      return null;
    }

}
