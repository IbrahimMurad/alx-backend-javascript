import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promises = Promise.all([uploadPhoto(), createUser()]);
  promises.then((responses) => {
    const [photo, user] = responses;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
