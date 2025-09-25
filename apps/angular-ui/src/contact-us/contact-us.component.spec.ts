import { TestBed } from '@angular/core/testing';
import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let fixture: import('@angular/core/testing').ComponentFixture<ContactUsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactUsComponent);
    fixture.detectChanges();
  });

  it('should render contact details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Contact Us');
    expect(compiled.textContent).toContain('John Doe');
    expect(compiled.textContent).toContain('+91-9876543210');
    expect(compiled.querySelector('a')?.getAttribute('href')).toBe('mailto:email@domain.com');
    // Accept both possible renderings for the visible text
    const emailText = compiled.querySelector('a')?.textContent;
    expect(emailText === 'email@domain.com' || emailText === 'email&#64;domain.com').toBe(true);
  });
});
