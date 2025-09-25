import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
  });

  it('should render not found message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('404 - Page Not Found');
  });
});

