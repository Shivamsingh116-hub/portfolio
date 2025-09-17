import type React from "react"

type imgsrcprops = {
    src: string
}
const PhotoShow: React.FC<imgsrcprops> = ({ src }) => {
    return (
        <div className="fixe inset-0">
            <img src={src} alt="img*" />
        </div>
    )
}

export default PhotoShow