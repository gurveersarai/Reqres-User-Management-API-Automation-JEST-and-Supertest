import { request } from "../helpers/requests.js";

describe("Users API Tests", () => {
  it("GET - list of users", async () => {
    const res = await request("get", "/api/users?page=2");
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("GET - Single User", async () => {
    const res = await request("get", "/api/users/4");
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty("id", 4);
    expect(res.body.data).toHaveProperty("first_name", "Eve");
  });

  it("GET - Single User Not Found", async () => {
    const res = await request("get", "/api/users/23");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({});
  });

  it("POST - Create User", async () => {
    const newUser = {
      name: "Alan",
      job: "Clerk",
    };
    const res = await request("post", "/api/users").send(newUser);
    const id = res.body.id;
    console.log("Created New User ID:", id);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("name", "Alan");
    expect(res.body).toHaveProperty("job", "Clerk");
  });

  it("GET - Retrieve ID of an Existing User", async () => {
    const res = await request("get", "/api/users/?first_name=George");
    const id = res.body.data[0]?.id;
    console.log("User ID for George:", id);
    expect(id).toBeDefined();
    expect(res.status).toBe(200);
  });

  it("PUT - Update User", async () => {
    updatedData = {
      name: "Derek",
      job: "Truck Driver",
    };
    const res = await request("put", "/api/user/2").send(updatedData);
    console.log(res.body);
    expect(res.body.name).toBe("Derek");
    expect(res.body.job).toBe("Truck Driver");
    expect(res.status).toBe(200);
  });

  it("DELETE - Delete User", async () => {
    const res = await request("delete", "/api/user/2");
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});
