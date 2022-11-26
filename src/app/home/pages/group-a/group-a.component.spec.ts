import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAComponent } from './group-a.component';

describe('GroupAComponent', () => {
  let component: GroupAComponent;
  let fixture: ComponentFixture<GroupAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
