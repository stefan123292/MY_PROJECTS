import {useState} from "react";
import "./Carousel.css"

function Carousel({image}){
    const [current, SetCurrent] = useState(0);

    const nextSlde = () => {
        SetCurrent((p) => (p + 1) % image.length )
    }
    const prevSlide = () => {
        SetCurrent((p) => p===0 ? image.length - 1: p - 1)
    }
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectClick = () => {
        if (selectedOption) {

            alert(`"Opțiunea selectată:"  ${selectedOption}`);
        } else {
            alert("Nicio opțiune selectată.");
        }
    }
    return (

        <div className="slide">
            <img className="img" src = {image[current]} alt = "Slide"/>
            <div className="controls">
                <button className = "button" onClick={prevSlide}>🠔</button>
                <button className = "button" onClick={nextSlde}>🠖</button>
            </div>
            <p className="Number">{current + 1}</p>
            <div className="Favorite">
                <label>
                    <input  className="Input"
                            type="radio"
                            value="1"
                            checked={selectedOption === "1"}
                            onChange={handleOptionChange} />
                    IMG 1
                    <br/>

                </label>

                <label>
                    <input className="Input"
                           type="radio"
                           value="2"
                           checked={selectedOption === "2"}
                           onChange={handleOptionChange} />
                    IMG  2
                    <br/>

                </label>

                <label>
                    <input  className="Input"
                            type="radio"
                            value="3"
                            checked={selectedOption === "3"}
                            onChange={handleOptionChange} />
                    IMG  3
                    <br/>
                </label>

                <label>
                    <input  className="Input"
                            type="radio"
                            value="4"
                            checked={selectedOption === "4"}
                            onChange={handleOptionChange} />
                    IMG   4
                    <br/>

                </label>

                <label>
                    <input className="Input"
                           type="radio"
                           value="5"
                           checked={selectedOption === "5"}
                           onChange={handleOptionChange}/>
                    IMG  5
                    <br/>

                </label>

                <label >
                    <input className="Input"
                           type="radio"
                           value="6"
                           checked={selectedOption === "6"}
                           onChange={handleOptionChange}/>
                    IMG 6
                    <br/>

                </label>

                <button className="Button" onClick={handleSelectClick}>Select</button>
            </div>
        </div>
    )
}
export default Carousel