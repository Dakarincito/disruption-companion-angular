import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../services/booking.service';

interface Evaluacion {
  bookingId: string;
  decision: string;
  reviewReasons: { code: string; detail: string }[];
  disruption: {
    type: string;
    delayMinutes: number;
  } | null;
  candidateOption: {
    flightNumber: string;
    date: string;
    departure: string;
    confidence: string;
  } | null;
}

@Component({
  selector: 'app-ejecutivo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejecutivo.component.html',
  styleUrl: './ejecutivo.component.css'
})
export class EjecutivoComponent {
  bookingId = 'ABC123';
  resultado: Evaluacion | null = null;
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

    this.bookingService.obtenerEjecutivo(codigo).subscribe({
      next: (respuesta) => {
        this.resultado = respuesta as Evaluacion;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No pudimos consultar la reserva. Revisa el código.';
        this.cargando = false;
      }
    });
  }
}