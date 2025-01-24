import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navigateToDevices() {
    this.router.navigate(['/devices']); // Navega a la ruta de Devices
  }

  navigateToServicePoint() {
    this.router.navigate(['/service-point']); // Puedes agregar la ruta para Service Point más tarde
  }
}