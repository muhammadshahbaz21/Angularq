import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isProfileDropdownOpen: boolean = false;
  isDesktopOrderDropdownOpen: boolean = false;
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
  constructor(private router: Router) {}
  navigateToOrder() {
    this.router.navigate(['/order']);
}
}
  