import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {Component, HostListener } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import {MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-order',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
printerConnected: boolean = false;
  isSearchVisible: boolean = false;
  showDropdown: boolean = false;  
  selectedProductTag: string = '';
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('#pending-all-button')) {
      this.showDropdown = false;
    }
  }

  selectOption(option: string) {
    console.log(`Selected option: ${option}`);
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  closeDropdown() {
    this.showDropdown = false;
  } 
  checkPrinterStatus() {
    this.printerConnected = true;
  }
  
}
