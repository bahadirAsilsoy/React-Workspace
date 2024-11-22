import React from 'react';

function Courses({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <img src={image} alt={title} />
      <h4 className="course-title">{title}</h4>
      <p className="course-desc">{description}</p>
      <h3 className="course-price">{price} ₺</h3>
      <div className="course-link">
        <a href={link}>Satın almak için</a>
      </div>
    </div>
  );
}

export default Courses;
