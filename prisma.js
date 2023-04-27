import { PrismaClient } from "@prisma/client";
import "./opentelemetry.js"; // <-- comment this line to fix the problem

const client = new PrismaClient();

async function main() {
  while (true) {
    console.log((await client.user.findMany()).length, "users found");
    await new Promise((r) => setTimeout(r, 1000));
  }
}

main();
