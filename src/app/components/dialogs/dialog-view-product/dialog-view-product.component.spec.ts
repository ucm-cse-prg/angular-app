import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewProductComponent } from './dialog-view-product.component';

xdescribe('DialogViewProductComponent', () => {
    let component: DialogViewProductComponent;
    let fixture: ComponentFixture<DialogViewProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DialogViewProductComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DialogViewProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should have a default image if none is provided', () => {
        const defaultImage = 'https://via.placeholder.com/150';
        expect(component.product.image).toBe(defaultImage);
    });

    it('should close the dialog when the close button is clicked', () => {
        spyOn(component.dialog, 'close');
        component.buttons[0].action();
        expect(component.dialog.close).toHaveBeenCalled();
    });

    it('should have a close button with correct text and color', () => {
        const closeButton = component.buttons[0];
        expect(closeButton.text).toBe('close');
        expect(closeButton.color).toBe('primary');
    });
});

