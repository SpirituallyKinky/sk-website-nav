(function() {
  if (document.querySelector('.sk-nav-wrap')) return;
  var nav = document.createElement('div');
  nav.innerHTML = `
<div class="sk-nav-wrap" style="background:#050505;border-bottom:1px solid #222222;padding:0 40px;box-shadow:0 4px 40px rgba(0,0,0,0.6);position:relative;box-sizing:border-box;overflow-x:hidden;">
  <input type="checkbox" id="sk-menu-toggle" style="display:none;">
  <div style="display:flex;align-items:center;justify-content:space-between;min-height:80px;gap:12px;">
    <a href="/" style="display:flex;align-items:center;text-decoration:none;flex-shrink:0;">
      <img src="https://i.imgur.com/rqurJYQ.png" alt="Spiritually Kinky" style="height:55px;width:auto;">
    </a>
    <div class="sk-nav-desktop" style="display:flex;align-items:center;gap:18px;overflow:hidden;flex:1;justify-content:center;min-width:0;">
      <a href="/about" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;white-space:nowrap;flex-shrink:0;">About</a>
      <a href="/work-with-me" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;white-space:nowrap;flex-shrink:0;">Work with me</a>
      <a href="https://spirituallykinky.buzzsprout.com" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;white-space:nowrap;flex-shrink:0;">Podcast</a>
      <a href="/blog" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;white-space:nowrap;flex-shrink:0;">Blog</a>
      <a href="/guides" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;white-space:nowrap;flex-shrink:0;">Guides</a>
      <a href="https://calendly.com/dustinleawheeler/visioncall" style="background:#b41e76;color:#ffffff;padding:11px 18px;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;text-decoration:none;white-space:nowrap;box-shadow:0 0 20px rgba(180,30,118,0.4);display:inline-block;flex-shrink:0;">Book a Vision Call</a>
    </div>
    <label for="sk-menu-toggle" class="sk-nav-mobile-btn" style="display:none;cursor:pointer;padding:8px;flex-shrink:0;">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </label>
  </div>
  <div class="sk-mobile-menu" style="display:none;flex-direction:column;background:#050505;border-top:1px solid #222222;padding:20px 0;gap:20px;">
    <a href="/about" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;text-align:center;">About</a>
    <a href="/work-with-me" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;text-align:center;">Work with me</a>
    <a href="https://spirituallykinky.buzzsprout.com" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;text-align:center;">Podcast</a>
    <a href="/blog" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;text-align:center;">Blog</a>
    <a href="/guides" style="color:#cccccc;font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;text-align:center;">Guides</a>
    <a href="https://calendly.com/dustinleawheeler/visioncall" style="background:#b41e76;color:#ffffff;padding:14px 24px;font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;text-decoration:none;text-align:center;margin:0 24px;">Book a Vision Call</a>
  </div>
</div>
`;
  document.body.insertBefore(nav, document.body.firstChild);
})();
