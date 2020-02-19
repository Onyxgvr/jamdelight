import imageName from "../images/Image Name.png";
import smallArrow from "../images/arrow-sm.png";

// Example usage: <img src={Resources.images.IMAGENAME.src} alt={Resources.images.IMAGENAME.alt} />

const images = {
    IMAGENAME: {
        src: imageName,
        alt: "Image Alt Description"
    },
    ARROW: {
        src: smallArrow,
        alt: "Small Arrow"
    }
};

export default images;