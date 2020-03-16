import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReadComponent } from './list-read.component';

describe('ListReadComponent', () => {
  let component: ListReadComponent;
  let fixture: ComponentFixture<ListReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
