import React from 'react';

const Loading = ({ show }) => {
  return (
    <div className="loading" style={{display: show ? "flex": "none"}}>
      <div className="spinner"></div>
    </div>
  );
}

export default Loading;