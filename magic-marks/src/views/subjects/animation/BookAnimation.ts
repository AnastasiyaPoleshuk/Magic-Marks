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
  turnPage(marksPages[index - 1], marksPages);

  marksPages[index].classList.add('open');
};

function turnPage(activePage: Element, pages: Element[]) {
  pages.forEach((page: Element) => {
    if (page.classList.contains('flip-right-to-left')) {
      page.classList.remove('flip-right-to-left');
      page.classList.remove('hide');
    }
  });

  activePage.classList.add('flip-right-to-left');
  setTimeout(() => {
    activePage.classList.add('hide');
  }, 1000);
}

export default BookAnimation;
