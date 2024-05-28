import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = Promise.all([uploadPhoto(), createUser()]);

  promises
    .then((responses) => {
      console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
