import { request } from "../helpers/requests.js";

describe("Register API Tests", () => {
  it("POST - Register a new user successfully", async () => {
    newUser = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const res = await request("post", "/api/register").send(newUser);
    console.log("ID:", res.body.id);
    console.log("Token:", res.body.token);
    expect(res.status).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(typeof res.body.token).toBe("string");
  });

  it("POST - Attempt to register with undefined user", async () => {
    newUser = {
      email: "adamsmith@test.com",
      password: "random123!",
    };
    const res = await request("post", "/api/register").send(newUser);
    console.log("ID:", res.body.error);
    expect(res.status).toBe(400);
    expect(res.body.error).toEqual(
      "Note: Only defined users succeed registration"
    );
  });

  it("POST - Attempt to register with a missing password", async () => {
    newUser = {
      email: "eve.holt@reqres.in",
    };
    const res = await request("post", "/api/register").send(newUser);
    console.log("ID:", res.body.error);
    expect(res.status).toBe(400);
    expect(res.body.error).toEqual("Missing password");
  });

  it("POST - Attempt to register with a missing email", async () => {
    newUser = {
      password: "random123",
    };
    const res = await request("post", "/api/register").send(newUser);
    console.log("ID:", res.body.error);
    expect(res.status).toBe(400);
    expect(res.body.error).toEqual("Missing email or username");
  });

  it("POST - Attempt to register with a missing email and password", async () => {
    newUser = {};
    const res = await request("post", "/api/register").send(newUser);
    console.log("ID:", res.body.error);
    expect(res.status).toBe(400);
    expect(res.body.error).toEqual("Missing email or username");
  });
});
