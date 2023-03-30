import {api} from './base';

export const getCard = (id) => {
  return api.get(`cardinfo.php?id=${id}`)
}