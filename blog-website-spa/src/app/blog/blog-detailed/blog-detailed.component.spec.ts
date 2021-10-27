import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailedComponent } from './blog-detailed.component';

describe('BlogDetailedComponent', () => {
  let component: BlogDetailedComponent;
  let fixture: ComponentFixture<BlogDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
