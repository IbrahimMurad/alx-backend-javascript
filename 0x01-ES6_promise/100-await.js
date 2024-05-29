import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  try {
    photo = await uploadPhoto();
  } catch (error) {
    photo = null;
  }
  let user;
  try {
    user = await createUser();
  } catch (error) {
    user = null;
  }

  return {
    photo,
    user,
  };
}
