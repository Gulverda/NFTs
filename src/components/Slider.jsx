import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularFaHeart } from "@fortawesome/free-regular-svg-icons";
import "./Slider.css";
import aiimg from './Navbar/images/ai.png'

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
    const [isDark, setIsDark] = useState(photos[photos.length - 1].dark);
    const [showModal, setShowModal] = useState(false);
    const [updatedPhotos, setUpdatedPhotos] = useState(photos);

    const visiblePhotos = updatedPhotos.slice(startIndex, startIndex + 3);

    const nextPhotos = () => {
        setIsDark(false);
        setStartIndex((startIndex + 2) % (photos.length - 2));
    };

    const prevPhotos = () => {
        setIsDark(true);
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
                        <div
                            className={`card ${isDark && index === 1 ? "dark" : ""}`}
                            key={photo.id}
                        >
                            <img src={photo.src} className="partner" alt="" />
                            <div className="about-img">
                                <div className="top-side">
                                    <div className="left-side">
                                        <div className="ai-img">
                                            <img src={aiimg} className="logo" alt="Logo" />
                                        </div>
                                        <div className="img-down-text">
                                            <p className="idt-title">{photo.title}</p>
                                            <p className="idt-description">{photo.description}</p>
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <p>
                                            <FontAwesomeIcon
                                                onClick={() => toggleFavorite(photo.id)}
                                                icon={photo.favorite ? solidFaHeart : regularFaHeart}
                                                className="icon"
                                            />
                                            <p className="fav-number">92</p>
                                        </p>
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
                <div className="buttons">
                    <button className="view-all-button" onClick={toggleModal}>
                        View All
                    </button>
                </div>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={toggleModal}>
                                Close
                            </button>
                            <div className="all-photos">
                                {photos.map((photo) => (
                                    <div className="card" key={photo.id}>
                                        <img src={photo.src} alt="" />
                                        <div className="about-img">
                                            <div className="top-side">
                                                <div className="left-side">
                                                    <div className="ai-img"></div>
                                                    <div className="img-down-text">
                                                        <p className="idt-title">{photo.title}</p>
                                                        <p className="idt-description">{photo.description}</p>
                                                    </div>
                                                </div>
                                                <div className="favorite">
                                                    <p>
                                                        <FontAwesomeIcon
                                                            onClick={() => toggleFavorite(photo.id)}
                                                            icon={photo.favorite ? solidFaHeart : regularFaHeart}
                                                            className="icon"
                                                        />
                                                        <p className="fav-number">92</p>
                                                    </p>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Slider;