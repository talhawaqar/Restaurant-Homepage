const menuItem = (menuImage, menuTitle, menuDescription) => {
  const column = document.createElement('div');
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardBody = document.createElement('div');
  const menuHeading = document.createElement('h3');
  const menuDes = document.createElement('p');

  column.classList.add('col-12', 'col-md-4');
  card.classList.add('card');
  cardImg.classList.add('card-img-top');
  cardBody.classList.add('card-body', 'text-center');
  menuDes.classList.add('card-text');

  menuHeading.innerText = menuTitle;
  menuDes.innerText = menuDescription;
  cardImg.src = menuImage;

  menuHeading.style.cssText = 'font-size:30px;';
  card.style.cssText = 'width: 18rem; background: rgba(100, 200, 100, 0.7) !important;';
  cardImg.style.cssText = 'height: 180px';

  cardBody.appendChild(menuHeading);
  cardBody.appendChild(menuDes);

  card.append(cardImg);
  card.append(cardBody);
  column.append(card);

  return column;
};

export default menuItem;
