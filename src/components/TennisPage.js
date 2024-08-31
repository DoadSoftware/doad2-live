import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, images, currentImageIndex, onImageChange }) => {
  if (!isOpen) return null;

  const handleNext = () => {
    onImageChange((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onImageChange((currentImageIndex - 1 + images.length) % images.length);
  };

  return ReactDOM.createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        {/* <button style={styles.closeButton} onClick={onClose}>X</button> */}
        <img src={images[currentImageIndex]} alt="Enlarged" style={styles.image} />
        <button style={{ ...styles.navButton, left: '10px' }} onClick={handlePrev}>&lt;</button>
        <button style={{ ...styles.navButton, right: '10px' }} onClick={handleNext}>&gt;</button>
      </div>
    </div>,
    document.body
  );
};

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
   modal: { backgroundColor: 'white', padding: '0px', borderRadius: '0px', position: 'relative', display: 'flex', alignItems: 'center', maxWidth: '90vw', maxHeight: '80vh', },
  image: { maxWidth: '100%', maxHeight: '80vh' },
  closeButton: { position: 'absolute', top: '0.1px', right: '0.1px', width: '30px', height: '30px', borderRadius: '50%', border: 'none', color: 'white', background: 'red', fontSize: '1.2rem', textAlign: 'center', lineHeight: '30px', cursor: 'pointer' },
  navButton: { position: 'absolute', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', fontSize: '1.5rem' },
};

const TennisPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imageSet, index) => {
    setImages(imageSet);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isModalOpen && images.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => clearInterval(interval); // Clean up interval on component unmount or modal close
  }, [isModalOpen, images]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', boxSizing: 'border-box', padding: '20px', marginBottom: '20px' }}>
             <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6600', textShadow: '-0px -0px 0 #00ccff, 0px -0px 0 #00ccff, -0px 0px 0 #00ccff, 0px 0px 0 #00ccff, 0px 0px 1px #000000', letterSpacing: '2px', background: 'linear-gradient(45deg, #ffcc00, #ff3300)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tennis<br /></h1>
        <p style={{ fontSize: '1.25rem' }}>
          <img 
           src="/images/Cricket.jpg"  alt="Cricket" width="500vh" height="340vh"  
            style={{ float: 'right', border: '2px dotted black', margin: '0 25px 15px 0', cursor: 'pointer' }} 
            onClick={() => openModal([
              '/images/Cricket.jpg', '/images/mainCover.jpg', '/images/project1.jpg',
              '/images/project2.jpg', '/images/project3.jpg', '/images/project2.jpg'
            ], 0)} 
          />
          In the paragraph below, the image will float to the right. A dotted black border is added to the image. 
          We have also added margins to the image to push the text away from the image:
          0 px margin on the top and right side, 15 px margin on the bottom, and 20 px margin on the left side of the image.<br/>
        </p>
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box', padding: '20px', marginBottom: '20px' }}>
             <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6600', textShadow: '-0px -0px 0 #00ccff, 0px -0px 0 #00ccff, -0px 0px 0 #00ccff, 0px 0px 0 #00ccff, 0px 0px 1px #000000', letterSpacing: '2px', background: 'linear-gradient(45deg, #ffcc00, #ff3300)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tennis<br /></h1>
        <p style={{ fontSize: '1.25rem' }}>
          <img 
            src="/images/Cricket.jpg"  alt="Cricket" width="500vh" height="340vh"  
            style={{ float: 'left', border: '2px dotted black', margin: '0 25px 15px 0', cursor: 'pointer' }} 
            onClick={() => openModal([
              '/images/Cricket.jpg', '/images/mainCover.jpg', '/images/project1.jpg',
              '/images/project2.jpg', '/images/project3.jpg', '/images/project2.jpg'
            ], 0)} 
          />
          In the paragraph below, the image will float to the left. A dotted black border is added to the image. 
          We have also added margins to the image to push the text away from the image:
          0 px margin on the top and right side, 15 px margin on the bottom, and 20 px margin on the left side of the image.
        </p>
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box', padding: '20px' }}>
             <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6600', textShadow: '-0px -0px 0 #00ccff, 0px -0px 0 #00ccff, -0px 0px 0 #00ccff, 0px 0px 0 #00ccff, 0px 0px 1px #000000', letterSpacing: '2px', background: 'linear-gradient(45deg, #ffcc00, #ff3300)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tennis<br /></h1>
        <p style={{ fontSize: '1.25rem' }}>
          <img 
            src="/images/Cricket.jpg"  alt="Cricket" width="500vh" height="340vh" 
            style={{ float: 'right', border: '2px dotted black', margin: '0 25px 15px 0', cursor: 'pointer' }} 
            onClick={() => openModal([
              '/images/Cricket.jpg', '/images/mainCover.jpg', '/images/project1.jpg',
              '/images/project2.jpg', '/images/project3.jpg', '/images/project2.jpg'
            ], 0)} 
          />
          In the paragraph below, the image will float to the right. A dotted black border is added to the image. 
          We have also added margins to the image to push the text away from the image:
          0 px margin on the top and right side, 15 px margin on the bottom, and 20 px margin on the left side of the image.
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} images={images} currentImageIndex={currentImageIndex}  onImageChange={changeImage} />
    </div>
  );
};

export default TennisPage;
