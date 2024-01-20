import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css'],
})
export class AddVisitComponent {
  stock_form!: FormGroup;
  bars: any;
  stocks: any;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.stock_form = this.formBuilder.group({
      happy_hour: ['', [Validators.required]],
      visitedOn: ['', Validators.required],
      bar_id: ['', Validators.required],
      stock_id: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    this.get_all_preloads();
  }
  get f() {
    return this.stock_form.controls;
  }

  get_all_preloads() {
    forkJoin([
      this.apiService.get_all_bars(),
      this.apiService.get_all_stocks(),
    ]).subscribe(([bars, stocks]) => {
      this.bars = bars;
      this.stocks = stocks;
    });
  }

  onSubmit() {
    if (this.stock_form.valid) {
      let model = this.stock_form.value;

      model.bar_id = Number(model.bar_id);
      model.stock_id = Number(model.stock_id);

      console.log(model)

      this.apiService.add_visit(model).subscribe({
        next: (res) => {
          if (res != null) {
            this.dialogRef.close();
          }
        },
        error: (error) => {},
      });
    }
  }
}
