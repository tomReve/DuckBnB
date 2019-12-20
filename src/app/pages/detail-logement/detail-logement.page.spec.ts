import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailLogementPage } from './detail-logement.page';

describe('DetailLogementPage', () => {
  let component: DetailLogementPage;
  let fixture: ComponentFixture<DetailLogementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLogementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailLogementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
