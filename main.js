// For help writing plugins, visit the documentation to get started:
//   https://docs.insomnia.rest/insomnia/introduction-to-plugins

const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

let app, auth;

module.exports.templateTags = [
  {
    name: "firebase",
    displayName: "firebase-auth-token",
    description:
      "Retrieve the current user's idToken from firebase authentication",
    async run({ context }) {
      if (!context.firebase) throw new Error("primary config is not found");
      if (!app) {
        const { config } = context.firebase;
        app = initializeApp(config);
        console.log(app.name);
        auth = getAuth(app);
      }
      const { email, password } = context.firebase.auth;
      const token = await getToken(auth, email, password);
      return token;
    },
  },
];

const getToken = async (auth, email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  if (!user) throw new Error("user not found");
  return await auth.currentUser.getIdToken();
};
