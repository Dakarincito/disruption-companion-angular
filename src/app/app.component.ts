import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { EjecutivoComponent } from './ejecutivo/ejecutivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PasajeroComponent, EjecutivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  vista: 'pasajero' | 'ejecutivo' = 'pasajero';
  
}
