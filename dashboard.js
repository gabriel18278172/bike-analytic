let stats = {
  visit: 0,
  share: 0,
  calculate: 0,
  "tip-1": 0,
  "tip-3": 0,
  "tip-5": 0
};

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.end(`
    <html>
      <head>
        <title>Analytics</title>
        <style>
          body {
            font-family: Arial;
            background: #111;
            color: white;
            text-align: center;
            padding: 40px;
          }
          .card {
            margin: 10px;
            padding: 20px;
            background: #222;
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <h1>📊 Your Site Stats</h1>
        <div class="card">Visits: ${stats.visit}</div>
        <div class="card">Shares: ${stats.share}</div>
        <div class="card">Calculations: ${stats.calculate}</div>
        <div class="card">$1 Tips: ${stats["tip-1"]}</div>
        <div class="card">$3 Tips: ${stats["tip-3"]}</div>
        <div class="card">$5 Tips: ${stats["tip-5"]}</div>
      </body>
    </html>
  `);
}
