import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplooyeeDetailsComponent } from './emplooyee-details.component';

describe('EmplooyeeDetailsComponent', () => {
  let component: EmplooyeeDetailsComponent;
  let fixture: ComponentFixture<EmplooyeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplooyeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplooyeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
