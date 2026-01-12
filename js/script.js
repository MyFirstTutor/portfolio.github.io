// 2026 Modern JS: Minimal, utilizing top-level await principles if needed
// But for this use case, we keep it synchronous and simple.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year Update
    document.getElementById('year').textContent = new Date().getFullYear();

    // Note: No menu toggle logic needed. 
    // The HTML 'popover' attribute handles opening/closing/backdrop native in the browser.
    
    // Note: No scroll animation logic needed.
    // CSS 'animation-timeline: view()' handles the reveal effects native in the browser.
});
