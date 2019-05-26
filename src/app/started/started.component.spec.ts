import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedComponent } from './started.component';

describe('StartedComponent', () => {
  let component: StartedComponent;
  let fixture: ComponentFixture<StartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
