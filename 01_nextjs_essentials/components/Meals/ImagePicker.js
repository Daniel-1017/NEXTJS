"use client";

import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();

    const imageInput = useRef();

    const handlePickClick = () => imageInput.current.click();

    const handleImageChange = event => {
        const file = event.target.files[0];

        if (!file) return setPickedImage(null);

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The imag selected by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    className={classes.input}
                    ref={imageInput}
                    onChange={handleImageChange}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
