import database from "@/infra/database";

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

beforeAll(clearDatabase);

test("POST to /api/v1/migrations should return 200", async () => {
  const firstResponse = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(firstResponse.status).toBe(201);

  const firstResponseBody = await firstResponse.json();
  expect(firstResponseBody.length).toBeGreaterThan(0);

  const secondResponse = await fetch(
    "http://localhost:3000/api/v1/migrations",
    {
      method: "POST",
    },
  );
  expect(secondResponse.status).toBe(200);

  const secondResponseBody = await secondResponse.json();
  expect(secondResponseBody.length).toBe(0);
});
