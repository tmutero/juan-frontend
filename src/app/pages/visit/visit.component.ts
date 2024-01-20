import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AddVisitComponent } from './add-visit/add-visit.component';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent {

  constructor(private apiService: ApiService, public dialog: MatDialog,     private router: Router
    ) {}


  ngOnInit(): void {
    this.get_all_visits();
  }

  visits: any = [];


  get_all_visits() {
    this.apiService.get_all_visits().subscribe({
      next: (result) => {
        this.visits = result;
      },
      error: (e) => {},
    });
  }

  newVisit(): void {
    const dialogRef = this.dialog.open(AddVisitComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((res) => {
     this.get_all_visits()
    });
  }
}
