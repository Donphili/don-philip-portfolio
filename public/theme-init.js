try {
  var t = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", t === "light" ? "light" : "dark");
  if (t === "light") {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f3f6ef");
  }
} catch {
  /* storage unavailable - keep default dark theme */
}
