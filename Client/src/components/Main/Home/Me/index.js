import React from 'react';

import './index.css'

function Me() {
  const date = '12-05-2019'
  const gameResult_1 = 8
  const gameResult_2 = -2
  const gameResult_3 = -3
  const gameResult_4 = 4
  const gameResult_5 = 5
  const gameResult_6 = -1
  const gameResult_7 = 7
  const gameResult_8 = -1
  const gameResult_9 = 3



  return (
    <div className="Me">
      <div className="ui inverted celled list">
        <div className="item">
          {
            gameResult_1 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_1}
          </div>
        </div>
        <div className="item">
          {
            gameResult_2 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_2}
          </div>
        </div>
        <div className="item">
          {
            gameResult_3 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_3}
          </div>
        </div>
        <div className="item">
          {
            gameResult_4 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_4}
          </div>
        </div>
        <div className="item">
          {
            gameResult_5 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_5}
          </div>
        </div>
        <div className="item">
          {
            gameResult_6 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_6}
          </div>
        </div>
        <div className="item">
          {
            gameResult_7 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>

          <div className="ui right floated label gameResult">{gameResult_7}
          </div>
        </div>
        <div className="item">
          {
            gameResult_8 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_8}
          </div>
        </div>
        <div className="item">
          {
            gameResult_9 < 0
              ? <div className="icon"><i className="large green trophy icon"></i></div>
              : <div className="icon"><i className="large red beer icon"></i></div>
          }
          <div className="gameDate">{date}</div>
          <div className="ui right floated label gameResult">{gameResult_9}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;