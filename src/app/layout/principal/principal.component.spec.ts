import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LayoutModule } from '../layout.module';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PrincipalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
