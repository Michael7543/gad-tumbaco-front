import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoModel, UpdateDepartamentoDTO } from '../../entities/Departamento';
import { DepartamentoService } from '../../services/departamento.service';
import { DepartamentoDTO } from '../../Dto/Departamento.dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  DepartamentoForm: FormGroup;
  listadodepartamento: DepartamentoModel[] = []; //poner
  selectDepartamento:UpdateDepartamentoDTO={}; //

  constructor(private departamentoService: DepartamentoService, private form: FormBuilder) {
    {
      this.DepartamentoForm = this.form.group({
        
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required]
      })
    }


  }

    ngOnInit(): void {
      this.getDepartamento();
     
    }

    

    getDepartamento() {
      this.departamentoService.getDepartamento().subscribe(data => {
        this.listadodepartamento = data;
        console.log(this.listadodepartamento)
      });
    }
    
    agregarDepartamento() {
      let departamento: DepartamentoModel = this.DepartamentoForm.value
      this.departamentoService.crearDepartamento(departamento).subscribe(data => {
        this.getDepartamento();
        console.log(departamento)
      })
    }
   

    updateDepartamento(): void {
      const id = this.selectDepartamento.id_departamentos ?? 0;
     
       const data: DepartamentoDTO = {
        nombre: this.DepartamentoForm.get('nombre')?.value,
        descripcion: this.DepartamentoForm.get('descripcion')?.value,

   
      }; 
    
      this.departamentoService.updateDepartamento(id, data).subscribe((response) => {
        console.log(response);
        this.getDepartamento();
      });
    }
    
    
    
  

    editdepartamento(lista:DepartamentoModel){
      console.log('Datos recibidos para editar:', lista);
      this.selectDepartamento = lista;
      
    }

    eliminarDepartamento(id_departamentos: number):void {
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
          this.departamentoService.eliminarDepartamento(id_departamentos).subscribe(data => {
            if (data && data) {
              this.listadodepartamento = data;
            }
            this.getDepartamento();
          })
          Swal.fire(
            'Eliminado',
            'El departamento ha sido eliminado',
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
