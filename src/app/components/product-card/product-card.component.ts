import { Component, input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button module
import { MatCardModule } from '@angular/material/card'; 
import { Product } from '@app/models/product';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '@app/core/services/api.service';
import { DialogViewProductComponent } from '@components/dialogs/dialog-view-product/dialog-view-product.component';

@Component({
  selector: 'app-product-card',
  imports: [
    MatButtonModule, 
    MatCardModule, 
    CommonModule, 
    MatChipsModule, 
    MatTooltipModule, 
    MatIconModule, 
    MatMenuModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

    product = input.required<Product>();


    constructor(
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }


    viewProduct() {
		const dialogRef = this.dialog.open(DialogViewProductComponent, { 
			data: {
				productId: this.product().id,
			}
		});

		dialogRef.afterClosed().subscribe();
	}
}

