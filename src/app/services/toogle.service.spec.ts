/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToogleService } from './toogle.service';

describe('Service: Toogle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToogleService]
    });
  });

  it('should ...', inject([ToogleService], (service: ToogleService) => {
    expect(service).toBeTruthy();
  }));
});
