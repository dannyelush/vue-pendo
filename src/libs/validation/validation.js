export function id(id) {
  if (!id) {
    console.error('Pendo ID is not defined');
    return false;
  }
  return true;  
}

export function isEnabled(isEnabled) {
  if (typeof isEnabled !== ('boolean' || 'undefined')) {
    console.error(`Pendo option isEnabled is of type ${typeof isEnabled} and should a boolean`);
    return false;
  } 
  return true;
}

export function validateVueVersion(version) {
  if (version[0] === '3') {
    return true;
  } else {
    console.error(`This plugin detected Vue version ${version} but requires Vue 3.x.x`);
    return false;
  }
}


export function validatePendoOptions(options) {
  return id(options.id) && isEnabled(options.isEnabled);
}
