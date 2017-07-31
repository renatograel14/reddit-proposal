import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPostsComponent } from './nav-posts.component';

describe('NavPostsComponent', () => {
  let component: NavPostsComponent;
  let fixture: ComponentFixture<NavPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
