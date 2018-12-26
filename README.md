TypeScript Mocha Global Before Demo
===================================

Q: How to write global `before` `beforeEach` `after` `afterEach` tests.

A: Just write them without `describe` in a test file, the will be collected and used.

```
npm install
npm test
```

Result:

```
### global before ###
  hello
### global beforeEach ###
    ✓ 1+1 === 2
### global afterEach ###
### global beforeEach ###
    ✓ 2+2 === 4
### global afterEach ###

### global after ###

```
