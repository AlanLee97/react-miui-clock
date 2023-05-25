import { useState } from 'react';
import Mask from '../mask/Mask';
import './style.scss';

function MenuItemBox(props = {}) {
  return (
    <div className="cpn--menu-item-box">
      <div className="panel">
        <div className="row">作息管理</div>
        <div className="row">生活早报</div>
        <div className="row">设置</div>
      </div>
    </div>
  );
}

export default function Menubar() {
  const [maskVisible, setMaskVisible] = useState(false);
  const onClickMenu = () => {
    setMaskVisible(true);
  };
  return (
    <div className="cpn--menubar">
      <Mask show={maskVisible} closeOnMask setVisible={setMaskVisible}>
        <MenuItemBox />
      </Mask>
      <span onClick={onClickMenu}>
        <svg t="1678722350933" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3344" width="20" height="20">
          <path d="M411.409 204.8c0-56.457 45.943-102.4 102.4-102.4s102.4 45.943 102.4 102.4-45.943 102.4-102.4 102.4-102.4-45.943-102.4-102.4z" fill="#272636" p-id="3345" />
          <path d="M411.409 512c0-56.457 45.943-102.4 102.4-102.4s102.4 45.943 102.4 102.4-45.943 102.4-102.4 102.4-102.4-45.943-102.4-102.4z" fill="#272636" p-id="3346" />
          <path d="M411.409 819.2c0-56.457 45.943-102.4 102.4-102.4s102.4 45.943 102.4 102.4-45.943 102.4-102.4 102.4-102.4-45.943-102.4-102.4z" fill="#272636" p-id="3347" />
        </svg>
      </span>
    </div>
  );
}
