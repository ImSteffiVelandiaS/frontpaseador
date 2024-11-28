import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenioListComponent } from './duenio-list.component';

describe('DuenioListComponent', () => {
  let component: DuenioListComponent;
  let fixture: ComponentFixture<DuenioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuenioListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
