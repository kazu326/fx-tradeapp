document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trade-form');
  const tableBody = document.querySelector('#trades-table tbody');
  const clearAllBtn = document.getElementById('clear-all');

  const STORAGE_KEY = 'fx_trades_v1';

  function loadTrades() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  function saveTrades(trades) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trades));
  }

  function render() {
    const trades = loadTrades();
    tableBody.innerHTML = '';
    trades.forEach((t, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${t.date}</td>
        <td>${t.pair}</td>
        <td>${t.side}</td>
        <td>${t.size}</td>
        <td>${t.entry}</td>
        <td>${t.exit}</td>
        <td>${t.pips ?? ''}</td>
        <td>
          <button class="button" data-action="delete" data-idx="${idx}">削除</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  function toNumber(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const trade = {
      date: data.get('date'),
      pair: String(data.get('pair') || '').trim(),
      side: data.get('side'),
      size: toNumber(data.get('size')),
      entry: toNumber(data.get('entry')),
      exit: toNumber(data.get('exit')),
      pips: data.get('pips') === '' ? null : toNumber(data.get('pips')),
      note: String(data.get('note') || '').trim(),
      createdAt: new Date().toISOString(),
    };

    if (!trade.date || !trade.pair || !trade.side || trade.size == null || trade.entry == null || trade.exit == null) {
      alert('必須項目を入力してください');
      return;
    }

    const trades = loadTrades();
    trades.unshift(trade);
    saveTrades(trades);
    form.reset();
    render();
  });

  tableBody?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.action === 'delete') {
      const idx = Number(target.dataset.idx);
      const trades = loadTrades();
      trades.splice(idx, 1);
      saveTrades(trades);
      render();
    }
  });

  clearAllBtn?.addEventListener('click', () => {
    if (confirm('全ての記録を削除しますか？')) {
      localStorage.removeItem(STORAGE_KEY);
      render();
    }
  });

  render();
});

