import { Component, input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from '@app/core/services/api.service';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';
import { Product } from '@app/models/product';

@Component({
    selector: 'app-dialog-view-product',
    imports: [
    DialogComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
],
    templateUrl: './dialog-view-product.component.html',
    styleUrl: './dialog-view-product.component.scss'
})
export class DialogViewProductComponent implements OnInit {

    // Product ID input
    productId = input.required<string>();

    product!: Product;

    // Define the dialog configuration
	title = "Create new product";
	buttons = [
		{
			text: "close",
			color: "primary",
			action: () => this.dialog.close(),
		}
	];
    
	constructor(
		private apiService: ApiService,
		private dialog: MatDialogRef<DialogViewProductComponent>,
		// private snackBarService: SnackBarService
	) {
        
    }

    async ngOnInit() {
        console.log(this.productId());
        const r = await this.apiService.getProduct(this.productId());
        this.product = r;
        console.log(r);
    }
}
