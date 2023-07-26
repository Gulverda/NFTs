import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import aiimg from './Navbar/images/ai2.png'

function Slider() {
    const photos = [
        {
            id: 1,
            src: require("./Navbar/images/2ndcard1.png"),
            title: "@wzard",
            description: "ERC-721",
        },
        {
            id: 2,
            src: require("./Navbar/images/2ndcard2.png"),
            title: "@wzard",
            description: "ERC-721",
        },
        {
            id: 3,
            src: require("./Navbar/images/2ndcard1.png"),
            title: "@wzard",
            description: "ERC-721",
        },
        {
            id: 4,
            src: require("./Navbar/images/2ndcard2.png"),
            title: "@wzard",
            description: "ERC-721",
        },
        {
            id: 5,
            src: require("./Navbar/images/2ndcard1.png"),
            title: "@wzard",
            description: "ERC-721",
        },

        {
            id: 6,
            src: require("./Navbar/images/2ndcard2.png"),
            title: "@wzard",
            description: "ERC-721",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [isDark, setIsDark] = useState(photos[photos.length - 1].dark);
    const [showModal, setShowModal] = useState(false);
    const [updatedPhotos] = useState(photos);

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

    return (
        <div className="slider">
            <div className="circle-and-title">
                <div className="red-circle"></div>
                <p className="first-slider-title">Popular Collections</p>
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
                        <div
                            className={`card1 ${isDark && index === 1 ? "dark" : ""}`}
                            key={photo.id}
                        >
                            <img src={photo.src} className="partner" alt="" />
                            <div className="about-img">
                                <div className="top-side">
                                    <div className="left-side">
                                        <div className="ai-img">
                                            <img src={aiimg} className="logo1" alt="Logo" />
                                        </div>
                                    </div>
                                    <div className="img-down-text1">
                                        <p className="idt-title">{photo.title}</p>
                                        <p className="idt-description">{photo.description}</p>
                                    </div>
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
                                Close
                            </button>
                            <div className="all-photos">
                                {photos.map((photo) => (
                                    <div className="card1" key={photo.id}>
                                        <img src={photo.src} alt="" />
                                        <div className="about-img">
                                            <div className="top-side">
                                                <div className="left-side">
                                                    <div className="ai-img">
                                                        <img src={aiimg} className="logo1" alt="Logo" />
                                                    </div>
                                                    <div className="ai-img"></div>
                                                    <div className="img-down-text1">
                                                        <p className="idt-title">{photo.title}</p>
                                                        <p className="idt-description">{photo.description}</p>
                                                    </div>
                                                </div>
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
