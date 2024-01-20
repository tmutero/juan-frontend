import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-beverage-modal',
  templateUrl: './add-beverage-modal.component.html',
  styleUrls: ['./add-beverage-modal.component.css']
})
export class AddBeverageModalComponent {
  beverage_form!: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddBeverageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.beverage_form = this.formBuilder.group({
      name: ['', [Validators.required]],
      alcoholUnits: ['', Validators.required],
      type: ['', Validators.required],
      codebar: ['', Validators.required],
    });
  }
  get f() {
    return this.beverage_form.controls;
  }

  onSubmit() {
    if (this.beverage_form.valid) {
      let model = this.beverage_form.value;

      this.apiService.add_beverage(model).subscribe({
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
