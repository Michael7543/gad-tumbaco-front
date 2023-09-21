import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TipoconceptoComponent } from './tipoconcepto/tipoconcepto.component';
import { TipoconsumidorComponent } from './tipoconsumidor/tipoconsumidor.component';
import { BancosComponent } from './bancos/bancos.component';
import { CentrocostoComponent } from './centrocostos/centrocosto.component';
import { MensajeComponent } from './mensaje/mensaje.component';

const routes: Routes = [
  { path: '', redirectTo: '/tarjeta', pathMatch: 'full' },
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'tipoconcepto', component: TipoconceptoComponent },
  { path: 'tipoconsumidor', component: TipoconsumidorComponent },
  { path: 'bancos', component: BancosComponent },
  { path: 'centro_costo', component: CentrocostoComponent },
  { path: 'mensajes', component: MensajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
