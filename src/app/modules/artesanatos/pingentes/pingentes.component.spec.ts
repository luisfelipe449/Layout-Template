import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingentesComponent } from './pingentes.component';

describe('PingentesComponent', () => {
  let component: PingentesComponent;
  let fixture: ComponentFixture<PingentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PingentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
