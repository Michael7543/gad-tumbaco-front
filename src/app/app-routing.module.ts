import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './main/components/tarjeta/tarjeta.component';
import { MensajeComponent } from './main/components/mensaje/mensaje.component';
import { UsuarioComponent } from './main/components/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/tarjeta', pathMatch: 'full' },
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'mensajes', component: MensajeComponent},
  {path:'user',component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
