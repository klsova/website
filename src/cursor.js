document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX + window.scrollX}px`;
      cursor.style.top = `${e.clientY + window.scrollY}px`;
    });
  
    document.addEventListener("mousedown", () => {
      cursor.classList.add("cursor--clicked");
    });
  
    document.addEventListener("mouseup", () => {
      cursor.classList.remove("cursor--clicked");
    });
  
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", () => {
        cursor.classList.add("cursor--link-hovered");
      });
      el.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor--link-hovered");
      });
    });
  
    document.addEventListener("mouseleave", () => {
      cursor.classList.add("cursor--hidden");
    });
  
    document.addEventListener("mouseenter", () => {
      cursor.classList.remove("cursor--hidden");
    });
  });