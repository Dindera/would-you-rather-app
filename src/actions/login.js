

export const LOG_IN = 'LOG_IN'


export function userLogin(id){
  return {
    type: LOG_IN,
    id,
  }
}

