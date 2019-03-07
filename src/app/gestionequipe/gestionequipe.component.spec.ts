import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionequipeComponent } from './gestionequipe.component';

describe('GestionequipeComponent', () => {
  let component: GestionequipeComponent;
  let fixture: ComponentFixture<GestionequipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionequipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
