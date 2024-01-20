import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AddStockComponent } from '../add-stock/add-stock.component';

@Component({
  selector: 'app-view-bar',
  templateUrl: './view-bar.component.html',
  styleUrls: ['./view-bar.component.css'],
})
export class ViewBarComponent {
  stocks: any;
  bar_data: any;

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.bar_data = this.router.getCurrentNavigation()?.extras.state as {
      data: any;
    };
    this.bar_data = this.bar_data['data'];
  }

  ngOnInit(): void {}

  newStock(): void {
    const dialogRef = this.dialog.open(AddStockComponent, {
      width: '500px',
      data: { bar_id: this.bar_data.bar_id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.router.navigate(['bar']);
    });
  }
}
