import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { AddBarModalComponent } from './add-bar-modal/add-bar-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {


  constructor(private apiService: ApiService, public dialog: MatDialog,     private router: Router
    ) {}


  ngOnInit(): void {
    this.get_all_bars();
  }

  bars: any = [];


  get_all_bars() {
    this.apiService.get_all_bars().subscribe({
      next: (result) => {
        this.bars = result;
      },
      error: (e) => {},
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBarModalComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((res) => {
     this.get_all_bars()
    });
  }

  viewBar(item: any){
    //this.router.navigate([`view-bar/${item}`]);

    this.router.navigate(['view-bar'], {
      state: {
        data: item,
      },
    });

  }
}
