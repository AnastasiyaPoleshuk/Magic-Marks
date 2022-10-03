/* eslint-disable no-use-before-define */

const BookAnimation = (
  element: HTMLElement,
  marksPagesCollection: HTMLCollection,
) => {
  const index = +element.id;
  const marksPages = Array.from(marksPagesCollection);

  marksPages.forEach((page) => {
    page.classList.remove('open');
  });
  console.log(marksPages, index);
  turnPage(marksPages[index], marksPages);

  marksPages[index - 1].classList.add('open');
};

function turnPage(activePage: Element, pages: Element[]) {
  pages.forEach((page: Element) => {
    if (page.classList.contains('flip-right-to-left')) {
      page.classList.remove('flip-right-to-left');
      page.classList.remove('hide');
    }
  });
  console.log(activePage);

  activePage.classList.add('flip-right-to-left');
  setTimeout(() => {
    activePage.classList.add('hide');
  }, 1000);
}

export default BookAnimation;
