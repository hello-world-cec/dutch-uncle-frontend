import React from 'react';
import './CardView.css';

function CardView() {
  return (
    <div className="cardview">
      <div className="cardview-header">
        <div className="cardview-button">
          <button className="backbutton">*</button>
        </div>
      </div>
      <div className="cardview-body">
        <div className="card">
          <div className="title"> Lorem ipsum </div>
          <div className="content">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
