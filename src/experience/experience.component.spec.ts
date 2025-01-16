import { TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();
  });

  it(`should have the list of experiences`, () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    const experience = fixture.componentInstance;
    expect(experience.experienceList).toBeInstanceOf(Array);
  });

  it('should render experience information', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li')?.textContent).toContain('Hopkins');
  });
});
