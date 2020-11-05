import React from 'react';
import './css/cardoverview.css';

function CardOverview({growth, pageViews, icon}) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="img/icon-up.svg" alt="" />
              {growth}%
            </span>
      </p>
    </div>
  )
}

export default CardOverview;
