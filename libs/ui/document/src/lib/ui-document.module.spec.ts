import { async, TestBed } from '@angular/core/testing';
import { UiDocumentModule } from './ui-document.module';

describe('UiDocumentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiDocumentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiDocumentModule).toBeDefined();
  });
});
