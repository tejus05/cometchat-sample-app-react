// Head over to the Credentials section in your app on CometChat Dashboard and where you can find your unique App ID, Region and Auth Key. 😊

console.log(process.env.REACT_APP_APP_ID);
console.log(process.env.REACT_APP_REGION);
console.log(process.env.REACT_APP_AUTH_KEY);

export const AppConstants = {
  APP_ID: process.env.REACT_APP_APP_ID!,
  REGION: process.env.REACT_APP_REGION!,
  AUTH_KEY: process.env.REACT_APP_AUTH_KEY!,
};
