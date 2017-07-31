import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreggitsComponent } from './subreggits.component';

describe('SubreggitsComponent', () => {
  let component: SubreggitsComponent;
  let fixture: ComponentFixture<SubreggitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubreggitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreggitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
