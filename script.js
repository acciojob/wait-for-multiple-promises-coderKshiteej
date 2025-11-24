const output = document.getElementById("output");
const loadingRow = document.getElementById("loading");

// Generate a promise that resolves after 1–3 seconds
function createPromise(index) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // between 1 and 3
    setTimeout(() => resolve({ index, time }), time * 1000);
  });
}

const p1 = createPromise(1);
const p2 = createPromise(2);
const p3 = createPromise(3);

Promise.all([p1, p2, p3]).then((results) => {
  // remove loading row
  loadingRow.remove();

  let maxTime = 0;

  results.forEach((result) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>Promise ${result.index}</td>
      <td>${result.time}</td>
    `;

    output.appendChild(tr);

    maxTime = Math.max(maxTime, Number(result.time));
  });

  // Add Total row
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>Total</td>
    <td>${maxTime.toFixed(3)}</td>
  `;
  output.appendChild(tr);
});
