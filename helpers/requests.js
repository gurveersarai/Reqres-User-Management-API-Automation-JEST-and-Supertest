import supertest from "supertest";

const API_URL = "https://reqres.in";
const GLOBAL_HEADERS = {
  "x-api-key": "reqres-free-v1",
};

export const request = (method = "get", url = "/") => {
  return supertest(API_URL)[method](url).set(GLOBAL_HEADERS);
};
