import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';

import { LayoutModule } from '../layout.module';
import { NgxsModule } from '@ngxs/store';
import { A11FocusService } from '../../shared/util/a11-focus.service';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot(), LayoutModule],
      declarations: [PrincipalComponent],
      providers: [
        A11FocusService,
        {
          provide: A11FocusService,
          useValue: { focus: jest.fn() },
        },
      ],
    });

    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
