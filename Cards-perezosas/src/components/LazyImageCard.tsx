import React, { useState, useRef, useEffect } from 'react';

type LazyImageCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const LazyImageCard: React.FC<LazyImageCardProps> = ({ imageUrl, title, description }) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentImgRef = imgRef.current;  // Guardar la referencia actual

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="card" style={{ cursor: 'pointer' }}>
        <div className="card-img-wrapper">
          {isInView ? (
            <img ref={imgRef} src={imageUrl} alt={title} className="card-img" />
          ) : (
            <div className="card-placeholder">Loading...</div>
          )}
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LazyImageCard;
