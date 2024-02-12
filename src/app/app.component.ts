import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
  
  title = 'Store';
  additionalData = 'Some additional data for the app component';
  
}