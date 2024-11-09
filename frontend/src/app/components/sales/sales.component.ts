import { Component } from '@angular/core';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  startDate: string = '';
  endDate: string = '';
  sales: any[] = []; // Inicializamos como un array vacío
  searched = false;

  constructor(private salesService: SalesService) {}

  getSales() {
    this.salesService.getSalesByDateRange(this.startDate, this.endDate).subscribe(
      (response) => {
        this.sales = response;
        this.searched = true;
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
        this.sales = [];
        this.searched = true;
      }
    );
  }
}
