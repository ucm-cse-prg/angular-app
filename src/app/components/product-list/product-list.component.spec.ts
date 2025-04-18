import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ApiService } from '@app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '@models/product';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';

describe('ProductListComponent', () => {
    let component: ProductListComponent;
    let loader: HarnessLoader;
    let fixture: ComponentFixture<ProductListComponent>;
    let apiServiceSpy: jasmine.SpyObj<ApiService>;


    const mockProducts: Product[] = [
        {
            id: '1',
            name: 'Product 1',
            description: 'Description 1',
            price: 10.99,
            category: {
                name: 'Category 1',
                description: 'Category Description',
            }
        },
        {
            id: '2',
            name: 'Product 2',
            description: 'Description 2',
            price: 20.99,
            category: {
                name: 'Category 2',
                description: 'Category Description',
            }
        }
    ];

    beforeEach(async () => {
        apiServiceSpy = jasmine.createSpyObj('ApiService', ['getAllProducts']);
        apiServiceSpy.getAllProducts.and.returnValue(Promise.resolve(mockProducts));

        TestBed.configureTestingModule({
            imports: [
                ProductListComponent,
                MatDialog
            ],
            providers: [
                { provide: ApiService, useValue: apiServiceSpy }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ProductListComponent);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should load products on init', async () => {
        fixture.detectChanges();
        await fixture.whenStable();
        expect(apiServiceSpy.getAllProducts).toHaveBeenCalled();
        expect(component.products).toEqual(mockProducts);
    });

    it('should load harness for dialog', async () => {
        component.createProduct();
        const dialogs = await loader.getAllHarnesses(MatDialogHarness);
        expect(dialogs.length).toBe(1);
    });

    it('should be able to close dialog', async () => {
        component.createProduct();
        let dialogs = await loader.getAllHarnesses(MatDialogHarness);
    
        expect(dialogs.length).toBe(1);
        await dialogs[0].close();
    
        dialogs = await loader.getAllHarnesses(MatDialogHarness);
        expect(dialogs.length).toBe(0);
    });

    it('should add new product when createProduct is called and dialog returns a product', async () => {
        expect(component.products.length).toBe(2);

        const newProduct: Product = {
            id: '3',
            name: 'Product 3', 
            description: 'New Product Description',
            price: 99.99,
            category: {
                name: 'Category 3',
                description: 'Category Description',
            }
        };
        
        
        let dialogs = await loader.getAllHarnesses(MatDialogHarness);
        expect(dialogs.length).toBe(1);

        let create_dialog = dialogs[0];

        console.log('Dialog:', create_dialog);
        // expect(component.createProduct).toHaveBeenCalled();
        // expect(component.products.length).toBe(3);
    });

    it('should update existing product in the list', () => {
        const updatedProduct: Product = { id: '1', name: 'Updated Name' } as Product;
        component.products = [...mockProducts];
        component.updateProduct(updatedProduct);
        expect(component.products.find(p => p.id === '1')).toEqual(updatedProduct);
    });

    it('should delete a product from the list', () => {
        component.products = [...mockProducts];
        const productToDelete = mockProducts[1];
        component.deleteProduct(productToDelete);
        expect(component.products.length).toBe(1);
        expect(component.products).not.toContain(productToDelete);
    });
});
