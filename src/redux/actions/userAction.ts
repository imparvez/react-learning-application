// You can use CONSTANTS.js file for below definitions of constants and import here.
export const UPDATE_USER = 'UPDATE_USER'

export const updateUser = (user: any) => ({
  type: UPDATE_USER,
  payload: {...user}
})
