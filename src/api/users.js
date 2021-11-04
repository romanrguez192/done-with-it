import client from "./client";

const signup = (user) => client.post("/users", user);

export default { signup };
