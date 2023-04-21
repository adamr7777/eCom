import React, {useContext} from "react";

import Image from "../components/Image"
import {getClass} from "../utils"
import {contextObj} from '../Context'

export default  function Photos() {
    const context = useContext(contextObj);

    
    const images = context.allPhotos.map((item, index)=> {
        return <Image key={item.id} imgObj={item} className={getClass(index)}/>
    })

    return (
        <main className="photos">
            {images}
        </main>
    )
}

