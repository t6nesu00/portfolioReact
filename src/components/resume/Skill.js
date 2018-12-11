import React from 'react';
import { Progress } from 'mdbreact';

const Skill = (props) => {
  return (
    <div>
      <h4 style={{ color: '#5bc0de' }}>HTML/CSS</h4>
      <Progress material value={99} height="20px" color="info">
              99%
      </Progress>
      <h4 style={{ color: '#d9534f' }}>Javascript</h4>
      <Progress material value={75} height="20px" color="danger">
              75%
      </Progress>
      <h4 style={{ color: '#0275d8' }}>JAVA</h4>
      <Progress material value={25} height="20px" color="primary">
              25%
      </Progress>
      <h4 style={{ color: '#f0ad4e' }}>React</h4>
      <Progress material value={25} height="20px" color="warning">
              25%
      </Progress>
    </div>
  );
};

export default Skill;