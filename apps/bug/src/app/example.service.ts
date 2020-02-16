import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';

@UntilDestroy()
// If you make this providedIn: 'root' or providedIn: 'any', the test will pass.
@Injectable()
export class ExampleService {
  constructor() {
    interval(1000)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
