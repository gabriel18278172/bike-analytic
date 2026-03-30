export default async function handler(req, res) {
  const event = req.query.event || "unknown";

  console.log("EVENT:", event);

  res.status(200).json({ success: true });
}
