document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-comment");
    const modal   = document.getElementById("comment-modal");
    const cancel  = document.getElementById("cancel-comment");
    const send    = document.getElementById("send-comment");
    const textarea= document.getElementById("comment-text");
  
    openBtn.addEventListener("click", () => {
      textarea.value = "";
      modal.style.display = "block";
      textarea.focus();
    });
  
    cancel.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    send.addEventListener("click", async () => {
      const text = textarea.value.trim();
      if (!text) {
        alert("Please enter a comment or press Cancel.");
        return;
      }
      const path = window.location.pathname;
      try {
        await fetch("https://formspree.io/f/meogpepv", {  // ← replace with your Formspree endpoint
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _subject: `Feedback: ${path}`,
            page: path,
            message: text
          })
        });
        alert("Thanks for your feedback!");
        modal.style.display = "none";
      } catch (err) {
        console.error(err);
        alert("Sorry, there was an error sending your feedback.");
      }
    });
  
    // clicking outside the modal content closes it
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  