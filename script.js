// DONATE QR MODAL
const modal = document.getElementById("qrModal");
const btn = document.getElementById("donateBtn");
const span = document.querySelector(".close");

btn.onclick = () => { modal.style.display = "flex"; }
span.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
