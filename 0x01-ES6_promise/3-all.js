import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (photo.body === undefined || user.firstName === undefined || user.lastName === undefined) {
    console.log('Signup system offline');
  } else {
    await Promise.all([photo, user]).then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    });
  }
}
