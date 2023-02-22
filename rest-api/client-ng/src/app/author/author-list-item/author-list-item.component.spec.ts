import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListItemComponent } from './author-list-item.component';

describe('AuthorListItemComponent', () => {
  let component: AuthorListItemComponent;
  let fixture: ComponentFixture<AuthorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
