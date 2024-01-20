import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-bar-modal',
  templateUrl: './add-bar-modal.component.html',
  styleUrls: ['./add-bar-modal.component.css'],
})
export class AddBarModalComponent {
  bar_form!: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddBarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.bar_form = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', Validators.required],
    });
  }
  get f() {
    return this.bar_form.controls;
  }

  onSubmit() {
    if (this.bar_form.valid) {
      let model = this.bar_form.value;

      this.apiService.add_bar(model).subscribe({
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
