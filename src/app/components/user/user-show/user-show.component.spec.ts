import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserShowComponent } from './user-show.component';
import { ApiService } from '../../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NgApexchartsModule } from 'ng-apexcharts';


describe('UserShowComponent', () => {
  let component: UserShowComponent;
  let fixture: ComponentFixture<UserShowComponent>;

  const apiServiceMock = {
    search: jest.fn(),
  }
  const activeRoute =
  {
    data: of(jest.fn())

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserShowComponent],
      providers: [{ provide: ApiService, useValue: apiServiceMock },
      { provide: ActivatedRoute, useValue: activeRoute }],
      imports: [NgApexchartsModule
      ]

    }).compileComponents();
    fixture = TestBed.createComponent(UserShowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
