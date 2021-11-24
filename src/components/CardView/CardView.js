import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './CardView.css';

const CardView = ({ showBackButton, title }) => {
  return (
    <div className="cardview">
      {showBackButton && (
        <div className="cardview-header">
          <Link to="/">
            <div className="cardview-button">
              <button className="rounded-md backbutton bg-product-yellow">
                <BiChevronLeft className="text-2xl" />
              </button>
            </div>
          </Link>
        </div>
      )}
      {title && (
        <div className="mt-6 cardview-header">
          <h2 className="text-3xl font-semibold title text-product-dark">
            {title}
          </h2>
        </div>
      )}
      <div className="cardview-body">
        <div className="card bg-product-blue text-product-dark">
          <div className="text-2xl">Lorem ipsum</div>
          <div className="content">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula
            ornare. Hendrerit
          </div>
        </div>

        <div className="card bg-product-blue text-product-dark">
          <div className="text-2xl">Lorem ipsum</div>
          <div className="content">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
