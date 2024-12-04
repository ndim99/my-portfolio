import { NextApiRequest, NextApiResponse } from "next";
import { createJWT } from "@/lib/session";

const testUser = {
  email: "test@test.com",
  password: "test123test",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (email === testUser.email && password === testUser.password) {
    const token = await createJWT({ email });
    res.setHeader(
      "Set-Cookie",
      `auth=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`
    );
    return res.status(200).json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
}
