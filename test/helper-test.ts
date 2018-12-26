// globals

// setup
before(() => {
  console.log('### global before ###');
});
beforeEach(() => {
  console.log('### global beforeEach ###');
});

// teardown
after(() => {
  console.log('### global after ###');
});
afterEach(() => {
  console.log('### global afterEach ###');
});
