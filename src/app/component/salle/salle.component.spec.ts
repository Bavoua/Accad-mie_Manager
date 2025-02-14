import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleComponent } from './salle.component';

describe('SalleComponent', () => {
  let component: SalleComponent;
  let fixture: ComponentFixture<SalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
