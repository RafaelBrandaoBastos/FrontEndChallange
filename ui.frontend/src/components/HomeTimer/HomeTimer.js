import React from "react";

import { Time, TimerH1, TimerP, TimerP2} from "./style";

function Timer(props) {
  const { countdown } = props;
  return (
    <div>
      <Time>
        <TimerP2>Application refresh in</TimerP2>
        <div style={{display: "block"}}>
          <TimerH1>{countdown}</TimerH1>
          <TimerP>seconds</TimerP>
        </div>
      </Time>
    </div>
  );
}

export default Timer;
