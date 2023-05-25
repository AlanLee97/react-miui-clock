import { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export default function Mask(props = {}) {
  const {
    show, children, setVisible, closeOnMask,
  } = props;

  const setClassName = (name) => window.className(name);

  const onClickMask = () => {
    if (closeOnMask) {
      setVisible(!show);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={setClassName([
        'cpn--mask',
        show ? '' : 'hide',
      ])}
      onClick={onClickMask}
    >
      {children}
    </div>,
    document.body,
  );
}
