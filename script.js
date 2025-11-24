//your JS code here. If required.
const output = document.getElementById("output");

// Three promises resolving after random times (1–3 seconds)
const p1 = new Promise((resolve) => {
  const t = Math.random() * 2 + 1; // 1-3 seconds
  setTimeout(() => resolve({ name: "Promise 1", time: t.toFixed(3) }), t * 1000);
});

const p2 = new Promise((resolve) => {
  const t = Math.random() * 2 + 1;
  setTimeout(() => resolve({ name: "Promise 2", time: t.toFixed(3) }), t * 1000);
});

const p3 = new Promise((resolve) => {
  const t = Math.random() * 2 + 1;
  setTimeout(() => resolve({ name: "Promise 3", time: t.toFixed(3) }), t * 1000);
});

// When ALL promises finish
Promise.all([p1, p2, p3]).then((results) => {
  // Sort by time taken (ascending)
  results.sort((a, b) => a.time - b.time);

  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time}</td>
    `;
    output.appendChild(row);
  });

  // Add TOTAL TIME
  const totalTime =
    results.reduce((sum, r) => sum + Number(r.time), 0).toFixed(3);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><b>Total</b></td>
    <td><b>${totalTime}</b></td>
  `;
  output.appendChild(totalRow);
});
