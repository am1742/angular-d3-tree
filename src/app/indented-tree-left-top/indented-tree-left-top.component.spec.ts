import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndentedTreeLeftTopComponent } from './indented-tree-left-top.component';

describe('IndentedTreeLeftTopComponent', () => {
  let component: IndentedTreeLeftTopComponent;
  let fixture: ComponentFixture<IndentedTreeLeftTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentedTreeLeftTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentedTreeLeftTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
