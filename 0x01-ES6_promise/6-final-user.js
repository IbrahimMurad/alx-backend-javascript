import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let promisesSettled = [];
  try {
    const user = await signUpUser(firstName, lastName);
    promisesSettled = [{ status: 'fulfilled', value: user }];
  } catch (error) {
    promisesSettled = [{ status: 'rejected', value: error }];
  }
  try {
    const photo = await uploadPhoto(fileName);
    promisesSettled.push({ status: 'fulfilled', value: photo });
  } catch (error) {
    promisesSettled.push({ status: 'rejected', value: error });
  }
  return promisesSettled;
}
