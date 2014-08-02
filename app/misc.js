window.lastContent = "";

window.displayContents = function(el) {
  return window.lastContent = el.innerHTML;
};
