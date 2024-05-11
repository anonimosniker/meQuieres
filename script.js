const btnSi = document.querySelector('#si');
const btnNo = document.querySelector('#no');
const reponse = document.querySelector('#response');
const body = document.querySelector('body');

let scale = 1;
const link = 'https://www.tiktok.com/@javi_riv/photo/7174413207375826181';

btnSi.addEventListener('click', () => {
  clearReponse()
  const text = document.createElement('h2');
  text.innerText = '¡¡UWU!! Sabía que me querias, yo también te quiero';
  const img = document.createElement('img');
  const div = document.createElement('div');
  div.innerHTML = `<a href="${link}">Mira 🥹</a>`;
  img.src = './img/feliz.jpg';
  img.style.width = '50%';
  img.style.display = 'block';
  img.style.margin = '0 auto';

  const audio = document.createElement('audio');
  audio.src = './audio/si.mp3';
  audio.controls = true;
  audio.autoplay = true;

  response.appendChild(audio);

  reponse.appendChild(text);
  reponse.appendChild(img);
  reponse.appendChild(div);

  for (let i = 0; i < 25; i++) {
    creaElemento();
  }
})

btnNo.addEventListener('click', () => {
  clearReponse()
  scale -= 0.5;
  if (scale == 0) {
    btnNo.remove()
    const img = document.createElement('img');
    img.src = './img/tristeza.webp';
    img.style.width = '50%';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    const text = document.createElement('h2');
    text.innerText = '¡¡Chale!! Sabía que no me querias :(';

    const audio = document.createElement('audio');
    audio.src = './audio/no.mp3';
    audio.controls = true;
    audio.autoplay = true;

    response.appendChild(audio);
    document.querySelector('#response').appendChild(text);
    document.querySelector('#response').appendChild(img);
    return
  };
  btnNo.style.transform = `scale(${scale})`;
})

const clearReponse = () => {
  while (reponse.firstChild) {
    reponse.removeChild(reponse.firstChild)
  }

}

function creaElemento() {
  const width = random(40, 80) + 'px';
  const left = Math.random() * 100 + '%';
  const elemento = document.createElement('div');
  const img = document.createElement('img');
  img.src = './img/corazon.svg'
  img.style.width = '100%';
  elemento.appendChild(img)
  elemento.style.height = width;
  elemento.style.width = width;
  elemento.className = 'elemento';
  elemento.style.left = left
  body.appendChild(elemento);
}

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}