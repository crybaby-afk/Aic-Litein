// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  // Determine current file name (default to index.html)
  const currentFile = location.pathname.split("/").pop() || "index.html";

  // Highlight the active navigation link by comparing filenames
  navLinks.forEach(link => {
    try {
      const linkUrl = new URL(link.getAttribute('href'), location.href);
      const linkFile = linkUrl.pathname.split("/").pop() || "index.html";
      // treat ministry detail pages (youth/women/men/children) as part of Ministries
      const ministryPages = ['youth.html', 'women.html', 'men.html', 'children.html'];
      if (linkFile === currentFile) link.classList.add('active');
      else if (ministryPages.includes(currentFile) && linkFile === 'ministries.html') link.classList.add('active');
      else link.classList.remove('active');
    } catch (e) {
      // ignore invalid URLs
    }
  });

  // Add smooth scrolling for same-page hashes (e.g., index.html#section)
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // If the link points to the current page and includes a hash, smoothly scroll
    try {
      const url = new URL(href, location.href);
      const linkFile = url.pathname.split("/").pop() || "index.html";
      if (linkFile === currentFile && url.hash) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(url.hash);
          if (target) {
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
          }
        });
      }
    } catch (e) {
      // ignore
    }
  });

  // Also update active state immediately when a link is clicked to give instant feedback
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});