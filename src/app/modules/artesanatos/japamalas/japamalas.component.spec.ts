import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapamalasComponent } from './japamalas.component';

describe('JapamalasComponent', () => {
  let component: JapamalasComponent;
  let fixture: ComponentFixture<JapamalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapamalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapamalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
