import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndWeekPlaylistComponent } from './end-week-playlist.component';

describe('EndWeekPlaylistComponent', () => {
  let component: EndWeekPlaylistComponent;
  let fixture: ComponentFixture<EndWeekPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndWeekPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndWeekPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
