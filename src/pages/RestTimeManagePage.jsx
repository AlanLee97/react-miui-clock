import React, { useRef, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function IconBack() {
  return (
    <svg
      t="1685181293877"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5876"
      width="22"
      height="22"
    >
      <path
        d="M389.802667 278.186667l45.226666 45.269333-184.533333 184.576h673.536v64H250.453333l187.733334 187.733333-45.226667 45.269334L128 540.074667 389.802667 278.186667z"
        fill="#2A2A30"
        p-id="5877"
      />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      t="1685182337786"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6899"
      width="22"
      height="22"
    >
      <path
        d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
        fill="#979797"
        p-id="6900"
      />
    </svg>
  );
}

function Header(props = {}) {
  const navigate = useNavigate();
  return (
    <section className="cpn--header">
      <div onClick={navigate(-1)}><IconBack /></div>
      <IconSearch />
    </section>
  );
}

export default class SelectCityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page-wrapper">
        <div className="page--rest-time-magnage">
          <Header />
          <div>
            作息
          </div>
        </div>
      </div>
    );
  }
}
