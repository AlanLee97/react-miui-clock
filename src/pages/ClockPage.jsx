import React from 'react';
import { connect } from 'react-redux';
import {
  ClockItem,
  DisplayTime,
} from '../components';
import './style.scss';

class ClockPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { clockList } = this.props;
    return (
      <div className="page--clock">
        <DisplayTime />

        {
          clockList.length > 0 && (
            <div className="clock-item-wrapper">
              {
                clockList.map((item, i) => <ClockItem data={item} key={`${item.location}-${i}`} />)
              }
            </div>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clockList: state.clockPage.clockList
  };
}

export default connect(mapStateToProps)(ClockPage);
