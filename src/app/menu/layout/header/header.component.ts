import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  activeItem2!: MenuItem;

  ngOnInit(): void {

    const btn = document.querySelector("#btn") as HTMLButtonElement;
    const sidebar = document.querySelector(".sidebar") as HTMLElement;


    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");

      // Verificar si el botón está activo
      if (!btn.classList.contains("active")) {
        // Si el botón no está activo, mostrar el tooltip
        tooltipList[0].hide();
      }else{
        tooltipList[0].show();
      }
    });

    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')) as Element[];
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

  }
}

