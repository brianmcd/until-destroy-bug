Demonstrates a bug with @ngneat/until-destroy.

Run `yarn` to install dependencies, then `ng test` to see the bug.

If you change the `ExampleService` to be `providedIn: 'root'` or `providedIn: 'any'`, the tests will pass.  If you provide the service in the `AppComponent` or in the `AppModule`, the test fails with:

```
TypeError: Cannot read property 'onDestroy' of undefined
```
