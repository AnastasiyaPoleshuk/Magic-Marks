/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../../types/interfaces';
import locales from '../../../locales/ru-Ru';
import './DropdownList.scss';

interface IProps {
  chooseMark: (mark: string) => void;
}

const DropdownList = ({ chooseMark }: IProps) => {
  const marks = useSelector((state: IStore) => { return state.marks.marks; });
  const [listContainer, setListContainer] = useState<HTMLDivElement>(document.createElement('div'));
  const [listItem, setListItem] = useState<HTMLDivElement>(document.createElement('div'));

  const toggleMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elem = event.target as HTMLDivElement;
    const parentNode = elem.parentNode as HTMLDivElement;
    if (parentNode.getAttribute('data-state') === 'active') {
      parentNode.setAttribute('data-state', '');
    } else {
      parentNode.setAttribute('data-state', 'active');
    }
    setListContainer(parentNode);
    setListItem(elem);
  };

  const closeMenu = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const elem = event.target as HTMLLabelElement;
    listItem.textContent = elem.textContent;
    listContainer.setAttribute('data-state', '');
    const deleteMark = listItem.textContent;
    chooseMark(deleteMark as string);
  };

  return (
    <div className="__select" data-state="">
      <div className="__select__title" data-default="Option 0" onClick={(event) => { return toggleMenu(event); }}>{locales.labels.SubjectsPage.chooseMark}</div>
      <div className="__select__content">
        {
          marks.Marks.map((mark, index) => {
            return (
              <>
                <input id={`singleSelect${index}`} className="__select__input" type="radio" name="singleSelect" checked onChange={() => { return chooseMark(mark.toString() as string); }} />
                <label htmlFor={`singleSelect${index}`} className="__select__label" onClick={(event) => { return closeMenu(event); }}>{mark}</label>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default DropdownList;
