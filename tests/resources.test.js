import { request } from "../helpers/requests.js";

describe("Resources API Tests", () => {
  it("GET - list of resources", async () => {
    const res = await request("get", "/api/unknown");
    expect(res.status).toBe(200);
    expect(res.body.data[0]).toHaveProperty("year");
    expect(res.body.data[0]).toHaveProperty("color");
  });

  it("GET - Access Single Resource", async () => {
    const res = await request("get", "/api/unknown/2");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        year: expect.any(Number),
        color: expect.any(String),
      })
    );
    expect(res.body.support).toHaveProperty("url");
    expect(res.body.support).toHaveProperty("text");
  });

  it("GET - Access Invalid Resource", async () => {
    const res = await request("get", "/api/unknown/23");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({});
  });
});
