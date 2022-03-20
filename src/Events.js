/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    for (let elem of arr) {
        let newElem = document.createElement('li');
        newElem.innerHTML = elem;
        newElem.addEventListener('mouseover', () => {
            newElem.setAttribute('title', newElem.innerHTML);
        });
        list.append(newElem);
    }
    document.body.append(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.innerHTML = 'tensor';
    link.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            link.innerHTML = link.innerHTML + ' ' + link.getAttribute('href');
        },
        { once: true },
    );
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let list = document.createElement('ul');
    function addElem() {
        let elem = document.createElement('li');
        elem.innerHTML = 'Пункт';
        elem.addEventListener('click', () => {
            elem.innerHTML += '!';
        });
        list.append(elem);
    }
    addElem();
    document.body.append(list);
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.addEventListener('click', addElem);
    document.body.append(button);
}
