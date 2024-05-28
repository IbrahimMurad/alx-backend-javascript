import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promisesSettled = [];
  const user = signUpUser(firstName, lastName);
  user
    .then((data) => promisesSettled.push({ status: 'fulfilled', value: data }))
    .catch((error) => promisesSettled.push({ status: 'rejected', value: error }));
  const photo = uploadPhoto(fileName);
  photo
    .then((data) => promisesSettled.push({ status: 'fulfilled', value: data }))
    .catch((error) => promisesSettled.push({ status: 'rejected', value: error }));
  return new Promise((resolve) => resolve(promisesSettled));
}
