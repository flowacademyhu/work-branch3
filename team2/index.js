const summary = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};

const sub = (a, b) => { // sub new  for team
  return a - b;
};

module.exports = {
  summary,
  mul: mul,
  sub: sub
}