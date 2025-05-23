import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyContactComponent } from './my-contact.component';

describe('MyContactComponent', () => {
  let component: MyContactComponent;
  let fixture: ComponentFixture<MyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
