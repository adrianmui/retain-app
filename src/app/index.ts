import * as services from './services';

export { App } from './app';

// get all values from object and place them into array

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
  ...mapValuesToArray(services)
]