import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesService } from '../../services/sales.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sales-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Dashboard de Ventas</h2>
      
      <form [formGroup]="filterForm" (ngSubmit)="onSubmit()" class="mb-6">
        <div class="flex gap-4">
          <div class="flex-1">
            <label class="block mb-2">Fecha Inicio</label>
            <input type="date" formControlName="startDate" class="w-full p-2 border rounded">
          </div>
          <div class="flex-1">
            <label class="block mb-2">Fecha Fin</label>
            <input type="date" formControlName="endDate" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded mt-6">
            Filtrar
          </button>
        </div>
      </form>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border rounded p-4">
          <h3 class="text-xl font-semibold mb-3">Top Vendedores</h3>
          <div *ngFor="let seller of topSellers" class="mb-2">
            <div class="flex justify-between items-center">
              <span>{{ seller.name }}</span>
              <span class="font-bold">{{ seller.totalAmount | currency }}</span>
            </div>
            <div class="text-sm text-gray-600">
              Productos vendidos: {{ seller.totalQuantity }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SalesDashboardComponent implements OnInit {
  filterForm: FormGroup;
  topSellers: any[] = [];

  constructor(
    private salesService: SalesService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit() {
    this.loadTopSellers();
  }

  onSubmit() {
    if (this.filterForm.valid) {
      const { startDate, endDate } = this.filterForm.value;
      this.salesService.getSalesByDateRange(new Date(startDate), new Date(endDate))
        .subscribe(data => {
          // Procesar datos filtrados
          this.loadTopSellers();
        });
    }
  }

  loadTopSellers() {
    this.salesService.getTopSellers().subscribe(
      data => this.topSellers = data
    );
  }
}