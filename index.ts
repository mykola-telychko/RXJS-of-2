import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/of
// Example 2: Emitting an object, array, and function
//emits values of any type
const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  return 'Hello';
});
//output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe((val) => console.log(val));
