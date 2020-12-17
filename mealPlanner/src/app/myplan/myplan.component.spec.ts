import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyplanComponent } from './myplan.component';

describe('MyplanComponent', () => {
  let component: MyplanComponent;
  let fixture: ComponentFixture<MyplanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
