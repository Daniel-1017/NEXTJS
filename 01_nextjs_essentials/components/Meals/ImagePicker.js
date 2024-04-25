"use client";

import React, { useRef } from "react";
import classes from "./ImagePicker.module.css";

const ImagePicker = ({ label, name }) => {
    const imageInput = useRef();

    const handlePickClick = () => imageInput.current.click();

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    className={classes.input}
                    ref={imageInput}
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
