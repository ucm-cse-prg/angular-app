import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

    constructor(private snackBar: MatSnackBar) { }

    openSnackBar(message: string, action = 'ok', color = 'success') {
        this.snackBar.open(message, action, {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackbar-' + color,
        });
    }
}