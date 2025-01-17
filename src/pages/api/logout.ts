import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      "auth=; HttpOnly; Path=/; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );
    return res.status(200).json({ message: "Logged out successfully" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
