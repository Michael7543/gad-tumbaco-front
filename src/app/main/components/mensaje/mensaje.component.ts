import { Component, OnInit } from '@angular/core';
import { MensajeDTO } from '../../Dto/Mensaje.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';
import { MensajeModel, UpdateMensajeDTO } from '../../entities/Mensaje';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  MensajeForm: FormGroup;
  listadomensaje: MensajeModel[] = []; //poner
  selectMensaje:UpdateMensajeDTO={nick:'',mensaje:''}; //poner
  
    constructor(private mensajeService:MensajeService, private form: FormBuilder, private messageService: MessageService) { 
      {
        this.MensajeForm = this.form.group({
          nick: ['', Validators.required],
          mensaje: ['', Validators.required],
        })
      } 
      this.initMensaje();   

    }
  initMensaje()
  {
    this.selectMensaje={nick:'',mensaje:''};
  }
    ngOnInit(): void {
      this.getMensaje();
     
    }

    getMensaje() {
      this.mensajeService.getListado().subscribe(data => {
        this.listadomensaje = data;
        this.listadomensaje = this.listadomensaje.sort((a, b) => a.id - b.id);
      });
    }
    agregarMensaje() {
      let mensaje: MensajeModel = this.MensajeForm.value
      this.mensajeService.createMensaje(mensaje).subscribe(data => {
        this.getMensaje();
      })
    }
    /* updateMensaje(id: number) {
      let mensaje: MensajeModel = this.MensajeForm.value
      this.mensajeService.updateMensaje(id, mensaje).subscribe(data => {
        this.getMensaje();
      })
    } */
    updateMensaje(): void {
      const id = this.selectMensaje?.id ?? 0;
      const data = this.MensajeForm.value;
    
      this.mensajeService.getListado().pipe(
        switchMap((response) => {
          console.log(response);
          return this.mensajeService.updateMensaje(data, id);
        })
      ).subscribe((response) => {
        console.log(response);
        this.getMensaje();
      });
    }
    
    
  

    editmensaje(lista:MensajeModel){
      this.selectMensaje = lista;
    }
 

    eliminarMensaje(id: number):void {
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
          this.mensajeService.eliminarMensaje(id).subscribe(data => {
            if (data && data) {
              this.listadomensaje = data;
            }
            this.getMensaje();
          })
          Swal.fire(
            'Eliminado',
            'El mensaje ha sido eliminado',
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