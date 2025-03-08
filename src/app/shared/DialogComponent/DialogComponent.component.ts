// add-customer-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-DialogComponent',
  templateUrl: './DialogComponent.component.html',
})
export class DialogComponent {
  customer = { name: '', customerNumber: '', addresses: [], contacts: [] };

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  onSave() {
    this.dialogRef.close(this.customer);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
