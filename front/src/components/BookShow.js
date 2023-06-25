import {BookCarousel} from "./Carousel";
import {SearchBar} from "./SearchBar";
import {BookList} from "./BookList";



export default function BookShow(){


    return(
        <div className="home-content">
            <BookCarousel />
            <BookList />
            <div className={"foot-wrapper"}>
            </div>
        </div>
    )
}