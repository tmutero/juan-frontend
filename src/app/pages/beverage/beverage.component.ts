import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AddBarModalComponent } from '../bar/add-bar-modal/add-bar-modal.component';
import { AddBeverageModalComponent } from './add-beverage-modal/add-beverage-modal.component';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent {

  constructor(private apiService: ApiService, public dialog: MatDialog,     private router: Router
    ) {}


  ngOnInit(): void {
    this.get_all_beverages();
  }

  beverages: any = [];


  get_all_beverages() {
    this.apiService.get_all_beverages().subscribe({
      next: (result) => {
        this.beverages = result;
      },
      error: (e) => {},
    });
  }

  newBeverage(): void {
    const dialogRef = this.dialog.open(AddBeverageModalComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((res) => {
     this.get_all_beverages()
    });
  }
}
