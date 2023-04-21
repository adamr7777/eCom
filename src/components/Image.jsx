import React from "react"

export default function Image({className, imgObj}) {
    const {url} = imgObj;
    
    return (
        <div className={`${className} image-container`}>
            <img src={url} className="image-grid"/>
        </div>
    )
}


