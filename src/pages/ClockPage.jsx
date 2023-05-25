import React from 'react';
import {
  ClockItem,
  DisplayTime,
} from '../components';
import './style.scss';

export default class ClockPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockItemList: [],
    };
  }

  componentDidMount() {
    this.getClockItemList();
  }

  getClockItemList = () => {
    const data = [
      {
        location: '伦敦',
        timegap: -8,
      },
      {
        location: '纽约',
        timegap: -12,
      },
    ];
    Promise.resolve(data).then((res) => {
      this.setState({
        clockItemList: res,
      });
    });
  };

  render() {
    const { clockItemList } = this.state;
    return (
      <div className="page--clock">
        <DisplayTime />

        {
          clockItemList.length > 0 && (
            <div className="clock-item-wrapper">
              {
                clockItemList.map((item, i) => <ClockItem data={item} key={`${item.location}-${i}`} />)
              }
            </div>
          )
        }
      </div>
    );
  }
}
