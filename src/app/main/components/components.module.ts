import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { MensajeComponent } from './mensaje/mensaje.component';
import { DepartamentoComponent } from './departamento/departamento.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [UsuarioComponent,MensajeComponent,DepartamentoComponent],

}

)
export class ComponentsModule { }
