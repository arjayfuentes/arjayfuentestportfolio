import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperiencesComponent } from './work-experiences.component';

describe('WorkExperiencesComponent', () => {
  let component: WorkExperiencesComponent;
  let fixture: ComponentFixture<WorkExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperiencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
