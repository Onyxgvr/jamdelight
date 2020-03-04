import noImage from "../images/icons/no_image.png";
import smallArrow from "../images/icons/arrow-sm.png";
import breakfastJams from "../images/breakfast_jams.webp";
import jamStrawberry from "../images/jam-strawberry.jpg";
import jamOrange from "../images/jam-orange.jpg";

// Example usage: <img src={Resources.images.IMAGENAME.src} alt={Resources.images.IMAGENAME.alt} />

const images = {
    NO_IMAGE: {
        src: noImage,
        alt: "No Image"
    },
    ARROW: {
        src: smallArrow,
        alt: "Small Arrow"
    },

    BREAKFAST_JAMS: {
        src: breakfastJams,
        alt: "Breakfast Jams"
    },

    JAM_STRAWBERRY: {
        src: jamStrawberry,
        alt: "Strawberry Jam"
    },
    JAM_ORANGE: {
        src: jamOrange,
        alt: "Orange Jam"
    }
};

export default images;