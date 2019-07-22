import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesAppComponent } from './des-app.component';

describe('DesAppComponent', () => {
  let component: DesAppComponent;
  let fixture: ComponentFixture<DesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
