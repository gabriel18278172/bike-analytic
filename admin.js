let stats = {
  visit: 0,
  share: 0,
  calculate: 0,
  "tip-1": 0,
  "tip-3": 0,
  "tip-5": 0
};

export default function handler(req, res) {
  res.status(200).json(stats);
}
