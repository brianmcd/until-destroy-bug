import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'until-destroy-bug-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExampleService]
})
export class AppComponent {
  title = 'bug';
}
