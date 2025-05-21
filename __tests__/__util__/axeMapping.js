import * as axe from 'axe-core';

export function axeFailMessage(checkId, data) {
  return axe.utils.getCheckMessage(checkId, 'fail', data);
}
