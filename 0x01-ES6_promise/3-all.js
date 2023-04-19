import { uploadPhoto, createUser } from './utils';

const p1 = uploadPhoto();
const p2 = createUser();
export default function handleProfileSignup() {
  return Promise.all([p1, p2])
    .then((res) => console.log(res[0].body, res[1].firstName, res[1].lastName));
}
