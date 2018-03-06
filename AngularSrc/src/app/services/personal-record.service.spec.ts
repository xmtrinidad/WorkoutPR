import { TestBed, inject } from '@angular/core/testing';

import { PersonalRecordService } from './personal-record.service';

describe('PersonalRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalRecordService]
    });
  });

  it('should be created', inject([PersonalRecordService], (service: PersonalRecordService) => {
    expect(service).toBeTruthy();
  }));
});
