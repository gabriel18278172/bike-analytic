let stats = {
  visit: 0,
  share: 0,
  calculate: 0,
  "tip-1": 0,
  "tip-3": 0,
  "tip-5": 0
};

export default function handler(req, res) {
  const event = req.query.event;

  if (event) {
    if (stats[event] !== undefined) {
      stats[event]++;
    }

    return res.status(200).json({ success: true });
  }

  // 👇 If no event, show stats
  res.status(200).json(stats);
}
