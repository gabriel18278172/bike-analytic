let stats = {
  visit: 0,
  share: 0,
  calculate: 0,
  "tip-1": 0,
  "tip-3": 0,
  "tip-5": 0
};

export default async function handler(req, res) {
  const event = req.query.event;

  if (event && stats[event] !== undefined) {
    stats[event]++;
  }

  res.status(200).json({
    success: true,
    stats
  });
}
