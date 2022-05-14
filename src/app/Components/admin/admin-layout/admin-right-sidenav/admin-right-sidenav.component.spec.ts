import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRightSidenavComponent } from './admin-right-sidenav.component';

describe('AdminRightSidenavComponent', () => {
  let component: AdminRightSidenavComponent;
  let fixture: ComponentFixture<AdminRightSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRightSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRightSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
