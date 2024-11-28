import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDuenioComponent } from './create-duenio.component';

describe('CreateDuenioComponent', () => {
  let component: CreateDuenioComponent;
  let fixture: ComponentFixture<CreateDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDuenioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
