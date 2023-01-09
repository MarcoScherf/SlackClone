import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSignInComponent } from './tab-sign-in.component';

describe('TabSignInComponent', () => {
  let component: TabSignInComponent;
  let fixture: ComponentFixture<TabSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
