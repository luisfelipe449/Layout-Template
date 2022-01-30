import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioalinhamentoComponent } from './bioalinhamento.component';

describe('BioalinhamentoComponent', () => {
  let component: BioalinhamentoComponent;
  let fixture: ComponentFixture<BioalinhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioalinhamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioalinhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
