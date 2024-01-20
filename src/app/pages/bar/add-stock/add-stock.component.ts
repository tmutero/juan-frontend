import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css'],
})
export class AddStockComponent {
  stock_form!: FormGroup;
  beverages: any;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddStockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.stock_form = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', Validators.required],
      beverage_id: ['', Validators.required],
    });

    this.get_all_beverages();
  }
  get f() {
    return this.stock_form.controls;
  }

  get_all_beverages() {
    this.apiService.get_all_beverages().subscribe({
      next: (result) => {
        this.beverages = result;
      },
      error: (e) => {},
    });
  }

  onSubmit() {
    if (this.stock_form.valid) {
      let model = this.stock_form.value;

      model.bar_id = this.data.bar_id;
      model.beverage_id = Number(model.beverage_id);

      this.apiService.add_stock(model).subscribe({
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
