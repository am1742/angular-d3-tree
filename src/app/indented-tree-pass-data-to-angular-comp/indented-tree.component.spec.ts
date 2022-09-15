import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndentedTreeComponentD3ToAngComp } from './indented-tree.component';

describe('IndentedTreeComponentD3ToAngComp', () => {
  let component: IndentedTreeComponentD3ToAngComp;
  let fixture: ComponentFixture<IndentedTreeComponentD3ToAngComp>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentedTreeComponentD3ToAngComp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentedTreeComponentD3ToAngComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
