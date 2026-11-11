try {
  var t = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", t === "light" ? "light" : "dark");
  if (t === "light") {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#dce6d7");
  }
} catch {
  /* storage unavailable - keep default dark theme */
}
