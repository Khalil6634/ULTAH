const input = document.getElementById("container");
const body = document.body;
const Name = document.getElementById("Name");
const popup = document.getElementById("pop");
const text_welcome = document.getElementById("text");
const card = document.getElementById("photos");
const Next = document.getElementById("Next");
const card_text = document.getElementById("text-ucapan");
const Images = document.getElementById("images");

let counter = 0;
const text = [
  "Haii cintahh or istiqomah, its me khalil or your cintahh, tahh selamat ulang tahun yang ke 20 yupp",
  "terimakasih kamu masih bertahan sampai kamu ketemu aku, and semoga kamu masih bisa bertahan yaa",
  "semakin tambah usia tantangan kamu akan jauh lebih berat, semangat upayakan apa yang kamu ingin raih",
  "yaa, jangan lupa apa yang ingin kamu raih, tapi jangan terlalu memaksakan yaa,jangan lupa sama diri kamu yaa, ingett ada aku khalil",
  "ku doakan selalu dan ku upayakan yang terbaik untukmu, semoga bisa tercapai semua hal yang ingin kamu raih, sehat selaluu cintahhkuu",
  "I will beside u forever, love you more, from me",
];

const images = [
  "IMG-20250425-WA0065.jpg",
  "IMG-20250318-WA0133 (23).jpg",
  "IMG-20250315-WA0001.jpg",
  "cdc8817b3ff6fc464a91b0df27587e44.jpg",
  "IMG-20250405-WA0045.jpg",
  "IMG-20250310-WA0055.jpg",
];

const audio = new Audio("Romantic Happy Birthday - Kalimba cover..mp3");
body.removeChild(text_welcome);

function submit() {
  if (Name.value === "istiqomah") {
    input.classList.add("removing");

    setTimeout(() => {
      body.removeChild(input);
      body.appendChild(text_welcome);
      text_welcome.classList.add("container");
      text_welcome.classList.add("poptext");
      body.style.backgroundColor = "black";

      audio
        .play()
        .then(() => {
          console.log("memutar audio");
        })
        .catch((err) => {
          console.error("Gagal memutar audio:", err);
        });

      setTimeout(() => {
        body.classList.add("whitebg");
        text_welcome.classList.remove("poptext");

        setTimeout(() => {
          card.classList.add("fade-in");
          Next.classList.add("Next-pop");

          Next.addEventListener("click", () => {
            counter = counter + 1;
            card_text.classList.add("fade-out");
            Images.classList.add("fade-out");
            card_text.classList.remove("fade-inn");
            Images.classList.remove("fade-inn");

            card_text.addEventListener("animationend", handleAnimationEnd, {
              once: true,
            });
            Images.addEventListener("animationend", handleAnimationEnd, {
              once: true,
            });
          });

          function handleAnimationEnd(event) {
            if (event.animationName === "fadeOut") {
              card_text.classList.remove("fade-out");
              Images.classList.remove("fade-out");

              console.log(counter);
              card_text.innerText = text[counter];
              Images.src = images[counter];

              card_text.classList.add("fade-inn");
              Images.classList.add("fade-inn");
            }

            if (counter === text.length) {
              card.classList.remove("fade-in");
              Next.classList.add("fade-out");

              setTimeout(() => {
                text_welcome.innerText = "This day about you <3";
                text_welcome.classList.add("poptext");
                setTimeout(() => {
                  text_welcome.classList.remove("poptext");
                  setTimeout(() => {
                    text_welcome.innerText =
                      "Terimakasih udah ada di dunia ini";
                    text_welcome.classList.add("poptext");
                  }, 3000);
                }, 3000);
              }, 1000);
            }
          }
        }, 2000);
      }, 3000);
    }, 1000);
  } else {
    console.log("nama tidak valid");
  }
}
