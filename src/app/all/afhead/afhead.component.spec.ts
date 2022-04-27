import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfheadComponent } from './afhead.component';

describe('AfheadComponent', () => {
  let component: AfheadComponent;
  let fixture: ComponentFixture<AfheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
