import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularFaHeart } from "@fortawesome/free-regular-svg-icons";

import aiimg from "./Navbar/images/ai.png";

// Separate modal content into a new component
function ModalContent({ photos, toggleFavorite }) {
  return (
    <div className="all-photos">
      {photos.map((photo) => (
        <div className="card" key={photo.id}>
          <img src={photo.src} alt="" />
          <div className="about-img">
            <div className="top-side">
              <div className="left-side">
                <div className="ai-img">
                  <img src={aiimg} className="logo1" alt="Logo" />
                </div>
                <div className="img-down-text">
                  <p className="idt-title">{photo.title}</p>
                  <p className="idt-description">{photo.description}</p>
                </div>
              </div>
              <div className="favorite">
                <div className="parent-for-p">
                  <FontAwesomeIcon
                    onClick={() => toggleFavorite(photo.id)}
                    icon={photo.favorite ? solidFaHeart : regularFaHeart}
                    className="icon"
                  />
                  <p className="fav-number">92</p>
                </div>
              </div>
            </div>
            <div className="bottom-side">
              <div className="paragraphs">
                <p className="current-bid">Current Bid</p>
                <p className="price">4.89 ETH</p>
              </div>
              <button>Place Bid</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Slider() {
  const photos = [
    {
      id: 1,
      src: require("./Navbar/images/card1.png"),
      title: "Virtual Art",
      description: "by @wzard",
      favorite: false,
    },
    {
      id: 2,
      src: require("./Navbar/images/card2.png"),
      title: "Virtual Art",
      description: "by @wzard",
      favorite: false,
    },
    {
      id: 3,
      src: require("./Navbar/images/card3.png"),
      title: "Virtual Art",
      description: "by @wzard",
      favorite: false,
    },
    {
      id: 4,
      src: require("./Navbar/images/card1.png"),
      title: "Virtual Art",
      description: "by @wzard",
      favorite: false,
    },
    {
      id: 5,
      src: require("./Navbar/images/card2.png"),
      title: "Virtual Art",
      description: "by @wzard",
      favorite: false,
    },
    {
      id: 6,
      src: require("./Navbar/images/card3.png"),
      title: "Virtual Art",
      description: "by @wzard",
      favorite: false,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [updatedPhotos, setUpdatedPhotos] = useState(photos);

  const visiblePhotos = useMemo(() => updatedPhotos.slice(startIndex, startIndex + 3), [
    startIndex,
    updatedPhotos,
  ]);

  const nextPhotos = () => {
    setStartIndex((startIndex + 2) % (photos.length - 2));
  };

  const prevPhotos = () => {
    setStartIndex((startIndex - 1 + (photos.length - 1)) % (photos.length - 1));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleFavorite = (photoId) => {
    setUpdatedPhotos((prevPhotos) => {
      return prevPhotos.map((photo) => {
        if (photo.id === photoId) {
          return {
            ...photo,
            favorite: !photo.favorite,
          };
        }
        return photo;
      });
    });
  };

  return (
    <div className="slider">
      <div className="center-div">
        <div className="space-between-div">
          <div className="circle"></div>
          <div className="title-for-sliders">
            <p className="live">Live Auctions</p>
          </div>
        </div>
      </div>
      <div className="first-buttons">
        <div className="fb-cont">
          <button className="prev-button" aria-label="Previous Page" onClick={prevPhotos}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next-button" aria-label="Next Page" onClick={nextPhotos}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="slider-center">
        <div className="card-style">
          {visiblePhotos.map((photo, index) => (
              <div className={`card ${index === 1 ? "dark" : ""}`} key={photo.id}>
              <div className="dark-overlay"></div>
              <img src={photo.src} className="partner" alt="" />
              <div className="about-img">
                <div className="top-side">
                  <div className="left-side">
                    <div className="ai-img">
                      <img src={aiimg} className="logo1" alt="Logo" />
                    </div>
                    <div className="img-down-text">
                      <p className="idt-title">{photo.title}</p>
                      <p className="idt-description">{photo.description}</p>
                    </div>
                  </div>
                  <div className="favorite">
                    <div className="parent-for-p">
                  <FontAwesomeIcon
                    onClick={() => toggleFavorite(photo.id)}
                    icon={photo.favorite ? solidFaHeart : regularFaHeart}
                    className="icon"
                  />
                  <p className="fav-number">92</p>
                </div>
                  </div>
                </div>
                <div className="bottom-side">
                  <div className="paragraphs">
                    <p className="current-bid">Current Bid</p>
                    <p className="price">4.89 ETH</p>
                  </div>
                  <button>Place Bid</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-view-all">
          <button className="view-all-button" onClick={toggleModal}>
            View All
          </button>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={toggleModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <ModalContent photos={updatedPhotos} toggleFavorite={toggleFavorite} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slider;