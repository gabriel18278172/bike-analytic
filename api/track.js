export default function handler(req, res) {
  const event = req.query.event;

  // 👇 ADD THIS LINE (just for forcing update)
  console.log("NEW VERSION LOADED");

  let stats = {
    visit: 0,
    share: 0,
    calculate: 0,
    "tip-1": 0,
    "tip-3": 0,
    "tip-5": 0
  };

  if (event) {
    if (stats[event] !== undefined) {
      stats[event]++;
    }

    return res.status(200).json({ success: true });
  }

  res.status(200).json(stats);
}
