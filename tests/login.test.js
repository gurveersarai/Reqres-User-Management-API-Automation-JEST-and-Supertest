import { request } from "../helpers/requests.js";

describe("Login API Test", () => {
  it("POST - Login Successfully", async () => {
    userLogin = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    const res = await request("post", "/api/login").send(userLogin);
    console.log("Login Token:", res.body.token);
    expect(res.status).toBe(200);
    expect(typeof res.body.token).toEqual("string");
  });

  it("POST - Login Successfully", async () => {
    userLogin = {
      email: "eve.holt@reqres.in",
    };
    const res = await request("post", "/api/login").send(userLogin);
    console.log("Error Message:", res.body.error);
    expect(res.status).toBe(400);
    expect(res.body.error).toEqual("Missing password");
  });
});
