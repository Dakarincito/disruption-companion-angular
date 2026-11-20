import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly baseUrl = '/api/v1/bookings';

  constructor(private http: HttpClient) {}

  obtenerPasajero(bookingId: string) {
    return this.http.get(
      `${this.baseUrl}/${encodeURIComponent(bookingId)}/passenger-view`
    );
  }

  obtenerEjecutivo(bookingId: string) {
    return this.http.get(
      `${this.baseUrl}/${encodeURIComponent(bookingId)}/assessment`
    );
  }
}