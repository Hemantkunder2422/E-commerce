import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTUyZGJlMzE2ZDQwNTM0NGFkMzU1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjkxMDM4OCwiZXhwIjoxNjc3MTY5NTg4fQ.KnMdTz2cpM2tNR-87A0jhyx0oJKoJZUu1C6eEs1HbSg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
