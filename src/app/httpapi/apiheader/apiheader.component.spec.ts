import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiheaderComponent } from './apiheader.component';

describe('ApiheaderComponent', () => {
  let component: ApiheaderComponent;
  let fixture: ComponentFixture<ApiheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
