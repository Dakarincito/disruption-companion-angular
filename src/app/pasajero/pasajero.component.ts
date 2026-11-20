import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../services/booking.service';

interface VistaPasajero {
  bookingId: string;
  title: string;
  message: string;
  details: string[];
  nextStep: string;
}

@Component({
  selector: 'app-pasajero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pasajero.component.html',
  styleUrl: './pasajero.component.css'
})
export class PasajeroComponent {
  bookingId = 'ABC123';
  resultado: VistaPasajero | null = null;
  cargando = false;
  error = '';

  constructor(private bookingService: BookingService) {}

  consultar() {
    const codigo = this.bookingId.trim().toUpperCase();

    this.resultado = null;
    this.error = '';

    if (!codigo) {
      this.error = 'Ingresa el código de reserva.';
      return;
    }

    this.cargando = true;

    this.bookingService.obtenerPasajero(codigo).subscribe({
      next: (respuesta) => {
        this.resultado = respuesta as VistaPasajero;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No pudimos consultar la reserva. Revisa el código.';
        this.cargando = false;
      }
    });
  }
}