import { Injectable } from '@angular/core';
import { SnackbarComponent } from '@app/shared/snackbar/snackbar.component';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

    constructor(private snackBar: SnackbarComponent) { }

    openSnackBar(message: string, action = 'ok', color = 'success') {
        this.snackBar.open(message, action, {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackbar-' + color,
        });
    }
}