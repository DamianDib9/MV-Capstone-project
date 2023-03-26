const logo = document.querySelector('.menuButton');
const xButons = document.querySelector('.crossButton');
const menu = document.querySelector('.popupContainer');

logo.addEventListener('click', () => {
  menu.style.display = 'flex';
});

xButons.addEventListener('click', () => {
  menu.style.display = 'none';
});

document.querySelectorAll('.popupButtons').forEach((n) => n.addEventListener('click', () => {
  menu.style.display = 'none';
}));

const profileCards = [
  {
    picture: '/img/pictures/dude1.png',
    cardTitle: 'Lionel Messi',
    cardSubtitle: 'Qatar 2022 WC champion',
    cardsP: 'Latest WC champion, lead Argentina to won the 3rd title',
    divClass: 'div1 cardTrans',
  },
  {
    picture: '/img/pictures/dude2.png',
    cardTitle: 'Andres Iniesta',
    cardSubtitle: 'South Africa 2010 WC champion',
    cardsP: 'Captain of Spain, lead his team to win their first WC',
    divClass: 'div2 cardTrans',
  }, {
    picture: '/img/pictures/dude3.png',
    cardTitle: 'Daniele De Rossi',
    cardSubtitle: 'Germany 2006 WC champion',
    cardsP: 'A great midfielder, lead Italy to won their 4th WC ',
    divClass: 'div3 cardTrans',
  }, {
    picture: '/img/pictures/dude4.png',
    cardTitle: 'Cafu (Marcos E. de Morais)',
    cardSubtitle: 'Korea-Japan 2002 WC champion',
    cardsP: 'Captain o Brazil, lead his team to won their 5th world cup',
    divClass: 'div4 cardTrans',
  }, {
    picture: '/img/pictures/dude5.png',
    cardTitle: 'Zinedine Zidane',
    cardSubtitle: 'France 1998 WC champion',
    cardsP: 'Captain of France, lead his team to won their first WC',
    divClass: 'div5 cardTrans',
  }, {
    picture: '/img/pictures/dude6.png',
    cardTitle: 'Miroslav Klose',
    cardSubtitle: 'Brazil 2014 WC champion',
    cardsP: 'highest scorer of the WC, lead Germany to win their 4th title',
    divClass: 'div6 cardTrans',
  }];

const fillGridContainer = document.querySelector('.gridContainer');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 6; i += 1) {
    const html = `<div class="${profileCards[i].divClass} cardContainer">
    <div class="cardPictureContainer"><img class="cardPicture" src="${profileCards[i].picture}" alt=""></div>
    <div>
        <h2 class="cardTitle">${profileCards[i].cardTitle}</h2>
        <h3 class="cardsSubtitle">${profileCards[i].cardSubtitle}</h3>
        <img class="cardUnderline" src="img/text/grayunderline.svg" alt="underline">
        <p class="cardsP">${profileCards[i].cardsP}</p>
    </div>
</div>`;

    fillGridContainer.innerHTML += html;
  }
});
