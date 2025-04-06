import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateProductComponent } from './dialog-update-product.component';

describe('DialogUpdateProductComponent', () => {
  let component: DialogUpdateProductComponent;
  let fixture: ComponentFixture<DialogUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
