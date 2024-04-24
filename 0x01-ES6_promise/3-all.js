import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const firstPromise = uploadPhoto();
  const secondPromise = createUser();

  Promise.all([firstPromise, secondPromise])
    .then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`))
    .catch(() => { console.logc('Signup system offline'); });
}
