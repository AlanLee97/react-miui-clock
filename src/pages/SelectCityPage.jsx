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
  const { onInputMode = () => {} } = props;
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(true);
  const onBack = () => {
    navigate(-1);
  };
  const onInputModeHandler = (val) => {
    setShowTitle(!val);
    onInputMode(val);
  };

  return (
    <section className="cpn--header">
      {showTitle && (
        <div className="title-bar">
          <div onClick={onBack}>
            <IconBack />
          </div>
          <div className="title-wrapper">
            <h1 className="title">选择城市</h1>
            <p className="second-title">GMT:世界时</p>
          </div>
          <div />
        </div>
      )}
      <SearchBar onInputMode={onInputModeHandler} />
    </section>
  );
}

function SearchBar(props = {}) {
  const { onInputMode = () => {} } = props;
  const [realInput, setRealInput] = useState(false);
  let inpRef = useRef(null);
  const onClickFakeInput = () => {
    setRealInput(true);
    onInputMode(true);
    setTimeout(() => {
      inpRef.current.focus();
    });
  };

  const onCancel = () => {
    setRealInput(false);
    onInputMode(false);
  };

  return (
    <section className="cpn--search-bar">
      {!realInput && (
        <div className="fake-input" onClick={onClickFakeInput}>
          <IconSearch />
          <div className="fake-placeholder">输入国家或城市名搜索</div>
        </div>
      )}
      {realInput && (
        <div className="real-input-wrapper">
          <div className="input-box">
            <IconSearch />
            <input ref={inpRef} type="text" className="input" />
          </div>
          <div className="btn-cancel" onClick={onCancel}>
            取消
          </div>
        </div>
      )}
    </section>
  );
}

function LetterIndicator(props = {}) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "#",
  ];
  return (
    <section className="cpn--letter-indicator">
      {letters.map((letter) => (
        <span className="letter" key={`letter_${letter}`}>
          {letter}
        </span>
      ))}
    </section>
  );
}

export default class SelectCityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
      cityList: [
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
        {
          id: "1",
          name: "阿比让",
          country: "科特迪瓦",
          gmt: "+0:00",
        },
        {
          id: "2",
          name: "阿德莱德",
          country: "澳大利亚",
          gmt: "+9:30",
        },
      ],
    };
  }

  componentDidMount() {}

  onInputMode = (val) => {
    this.setState({
      showContent: !val,
    });
  };

  render() {
    const { cityList, showContent } = this.state;
    return (
      <div className="page-wrapper">
        <div className="page--select-city">
          <Header onInputMode={this.onInputMode} />
          {showContent && (
            <div className="city-list-wrapper">
              <LetterIndicator />
              <div className="city-list">
                <div>
                  {cityList.map((city, i) => {
                    return (
                      <div
                        key={`${i}_${city.id}_${city.name}`}
                        className="city-item"
                      >
                        <div>{city.name}</div>
                        <div>
                          {city.country} GMT {city.gmt}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
