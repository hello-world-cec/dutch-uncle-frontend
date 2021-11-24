import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './CardView.css';
import GeneralCard from '../GeneralCard/GeneralCard';
import ServiceCard from '../ServiceCard/ServiceCard';

const CardView = ({ showBackButton, title, news, places, services }) => {
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

      <div className="mb-24 cardview-body">
        {news &&
          news.map((data, index) => {
            return (
              <div
                className="card bg-product-blue text-product-dark"
                key={index}
              >
                <div className="text-2xl">{data.title}</div>
                <div className="content">{data.content}</div>
              </div>
            );
          })}

        {places &&
          places.map((data, index) => {
            return (
              <GeneralCard
                key={index}
                title={data.name}
                about={data.about}
                imageURL={data.imageURL}
              />
            );
          })}

        {services &&
          services.map((data, index) => {
            return (
              <ServiceCard
                key={index}
                name={data.name}
                contact={data.contact}
                distance={data.distance}
                address={data.address}
                openingTime={data.openingTime}
                closingTime={data.closingTime}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardView;
