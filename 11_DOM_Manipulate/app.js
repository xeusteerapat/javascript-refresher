// const target = document.getElementById('app');
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  return `
  <p>test</p>
  `;
});

app.addEventListener('click', function() {
  target.textContent = 'HAHAHAHA +1111111';
});

// doest work, we need target DOM to render
