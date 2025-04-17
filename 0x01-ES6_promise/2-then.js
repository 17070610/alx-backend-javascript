export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    return promise
      .then(() => ({status: 200, body: 'success'}))
      .catch(() => new Error())
      .finally(() => console.log('Got a response from API'));
  });
}
