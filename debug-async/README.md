# Debug Async

This project displays debugging and testing asynchronous functionality using Mocha.

Both `callOneService` and `callTwoService` functions are asynchronous, so to ensure that `remoteMathService` waits for each function to return before calling its callback I've made each of these two functions return a promise.  

Knowing that we're waiting for these asynchronous functions to complete before returning the callback function, I declared `remoteMathService` as an `async` function.

## Original Solution

Originally within `remoteMathService` I prefaced both `callOneService` and `callTwoService` with the `await` keyword, instructing `remoteMathService` to pause execution and not move on until each function completed.

This does work and returns the correct answer, but has one drawback.  As mentioned, `await` halts execution within `remoteMathService` each time it's called.  In this case, `callOneService` and `callTwoService` do not rely on each other, so there was no need to call `await` two separate times.

## Optimized Solution

Instead, I used a combination of one `await` with a `Promise.all` call which will wait until both functions are complete but still allow them to execute at the same time.  While the result is ultimately the same, this approach reduces run time by 1000ms from 2.5s (pause at `callOneService` for 1s, then pause at `callTwoService` for 1.5s) to 1.5s (run both `callOneService` and `callTwoService` in parallel).

The result is that `callOneService` sets the variable `one` equal to `1`, `callTwoService` sets the variable `two` equal to `2`, and then the callback returned by `remoteMathService` adds them together and returns `3`.

## Testing the Code

First clone the repo:

`git clone https://github.com/evwilkin/evan_wilkinson/tree/master/debug-async`

Next install the dependencies:

`npm install`

Finally, run the following command in the Terminal to see automated test results from Mocha:

`npm test`
