import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajeComponent } from './main/components/mensaje/mensaje.component';
import { UsuarioComponent } from './main/components/usuario/usuario.component';
import { DepartamentoComponent } from './main/components/departamento/departamento.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'mensajes', component: MensajeComponent},
  {path:'user',component:UsuarioComponent},
  {path:'departamento',component: DepartamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
