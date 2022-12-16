import { Pendo } from './libs/pendo/pendo';

import {
  validatePendoOptions, 
  validateVueVersion
} from './libs/validation/validation';

const VuePendo = {
  install(app, options) {
    const allOptions = {
      isEnabled: true,
      ...options,
    }
    const { id, isEnabled } = allOptions;
    if (validatePendoOptions({ id, isEnabled }) && validateVueVersion(app.version) && isEnabled) {
      new Pendo(id);
    }
  }
}

export default VuePendo;