import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { SidebarAdministracionComponent } from './sidebar-administracion/sidebar-administracion.component';
import { NavBarAdministacionComponent } from './nav-bar-administacion/nav-bar-administacion.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarAdministracionComponent,
    NavBarAdministacionComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarAdministracionComponent,
    NavBarAdministacionComponent
  ]
})
export class LayoutModule { }
