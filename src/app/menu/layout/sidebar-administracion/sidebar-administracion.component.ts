import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-administracion',
  templateUrl: './sidebar-administracion.component.html',
  styleUrls: ['./sidebar-administracion.component.css']
})
export class SidebarAdministracionComponent {

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
