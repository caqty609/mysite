window.addEventListener('DOMContentLoaded', () => {
  const faceSad     = document.getElementById('faceSad');
  const faceHappy   = document.getElementById('faceHappy');
  const balloonHappy = document.getElementById('balloonHappy');
  const connectorNi = document.getElementById('connectorNi');

  // ── フェーズ1 ──────────────────────────────────
  // ページ読み込み直後: 困った顔＋「困った」吹き出しが表示（初期状態）

  // ── フェーズ2（2秒後）──────────────────────────
  // 困った顔 → ニコニコ顔＋「助かった」吹き出しへ切り替え
  setTimeout(() => {
    faceSad.classList.add('face-unit--gone');     // 困った顔をフェードアウト
    faceHappy.classList.remove('face-unit--hidden');
    faceHappy.classList.add('face-unit--visible'); // ニコニコ顔をフェードイン
    connectorNi.classList.add('show');             // 「に」を表示
  }, 2000);

  // ── フェーズ3（3.8秒後）────────────────────────
  // 「助かった」吹き出しだけをフワッと消す → ニコニコ顔だけ残る
  setTimeout(() => {
    balloonHappy.classList.add('balloon--fade');
  }, 3800);
});
