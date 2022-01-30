import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapulariosComponent } from './escapularios.component';

describe('EscapulariosComponent', () => {
  let component: EscapulariosComponent;
  let fixture: ComponentFixture<EscapulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscapulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
