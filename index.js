// @ts-nocheck
// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// const mouse2 = document.getElementById("mouse2");
// const mouse1 = document.getElementById("mouse1");
// const cursor = document.getElementById("cursor");

const cursors = document.querySelectorAll(".mouses");

window.addEventListener("mousemove", (e) => {
  for (const cursor of cursors) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  }
  // cursor.style.left = `${e.pageX}px`;
  // cursor.style.top = `${e.pageY}px`;
  // mouse1.style.left = `${e.pageX}px`;
  // mouse1.style.top = `${e.pageY}px`;
  // mouse2.style.left = `${e.pageX}px`;
  // mouse2.style.top = `${e.pageY}px`;
});
