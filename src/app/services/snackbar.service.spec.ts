import { TestBed } from '@angular/core/testing';
import { SnackbarComponent } from '@shared/snackbar/snackbar.component';
import { SnackBarService } from './snackbar.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SnackBarService', () => {
    let service: SnackBarService;
    let snackBar: SnackbarComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule],
            providers: [
                SnackBarService,
                SnackbarComponent
            ]
        });
        service = TestBed.inject(SnackBarService);
        snackBar = TestBed.inject(SnackbarComponent);
    });

    it('should be created', () => {
        expect(SnackBarService).toBeTruthy();
    });
    
    it('should open a snackbar with the correct message and action', async() => {
        const message = 'Test message';
        const action = 'Test action';
        const color = 'error';

        const spy = spyOn(snackBar, 'open').and.stub();

        service.openSnackBar(message, action, color);

        expect(spy.calls.count()).toBe(1);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(message, action, {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackbar-' + color,
        });
    });
});
