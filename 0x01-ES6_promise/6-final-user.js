import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  let firstFunctionPromise = signUpUser(firstName, lastName);
  let secondFunctionPromise = uploadPhoto(fileName);

  return Promise.allSettled([firstFunctionPromise, secondFunctionPromise])
    .then((results) => {
      results.map((result, index) => ({
        status: result.status,
        value: index === 0 ? result.value : result.reason
      }));
    });
}


// export default async function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise
//     .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
//     .then((res) => (
//       res.map((o) => ({
//         status: o.status,
//         value: o.status === 'fulfilled' ? o.value : String(o.reason),
//       }))
//     ));
// }