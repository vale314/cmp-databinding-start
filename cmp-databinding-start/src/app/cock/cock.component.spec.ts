import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockComponent } from './cock.component';

describe('CockComponent', () => {
  let component: CockComponent;
  let fixture: ComponentFixture<CockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
