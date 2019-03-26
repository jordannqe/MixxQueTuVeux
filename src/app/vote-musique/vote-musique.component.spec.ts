import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteMusiqueComponent } from './vote-musique.component';

describe('VoteMusiqueComponent', () => {
  let component: VoteMusiqueComponent;
  let fixture: ComponentFixture<VoteMusiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteMusiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
