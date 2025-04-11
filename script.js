
function calculateScore() {
  const weights = {
    ministerial: 0.35,
    public: 0.25,
    time: 0.15,
    alignment: 0.10,
    resources: 0.10,
    special: 0.05
  };

  const ministerial = parseFloat(document.getElementById('ministerial').value) || 0;
  const publicInt = parseFloat(document.getElementById('public').value) || 0;
  const time = parseFloat(document.getElementById('time').value) || 0;
  const alignmentRaw = document.getElementById('alignment').value;
  const resources = parseFloat(document.getElementById('resources').value) || 0;
  const specialRaw = document.getElementById('special').value;

  const alignment = alignmentRaw === 'A' ? 3 : alignmentRaw === 'B' ? 2 : alignmentRaw === 'C' ? 1 : 0;
  const special = specialRaw === 'Yes' ? 1 : 0;

  const total =
    ministerial * weights.ministerial +
    publicInt * weights.public +
    time * weights.time +
    alignment * weights.alignment +
    resources * weights.resources +
    special * weights.special;

  document.getElementById('result').innerHTML = `<h2>Total Weighted Score: ${total.toFixed(2)}</h2>`;

  const urgencyBox = document.getElementById('urgency');
  urgencyBox.className = 'urgencyBox';
  if (total >= 3.5) {
    urgencyBox.textContent = 'Urgency Flag: HIGH';
    urgencyBox.classList.add('high');
  } else if (total >= 2) {
    urgencyBox.textContent = 'Urgency Flag: MEDIUM';
    urgencyBox.classList.add('medium');
  } else {
    urgencyBox.textContent = 'Urgency Flag: LOW';
    urgencyBox.classList.add('low');
  }
  urgencyBox.style.display = 'block';
}
