const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(finalActivity) {
  if (typeof finalActivity !== 'string' || !Number(finalActivity)) return false;
  if (finalActivity >= 15 || finalActivity <= 0) return false;

  const N = MODERN_ACTIVITY / finalActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const result = Math.ceil(Math.log(N) / k);

  return result;
}

module.exports = {
  dateSample,
};
