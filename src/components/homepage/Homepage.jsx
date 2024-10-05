import Circle from "../circle/Circle.jsx";
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            
            <div className="Circles">
                <Circle 
                    number={9}
                    title1={'в школе'}
                    title2={'направлений'}
                />
                <Circle 
                    number={7}
                    title1={'в интенсивах'}
                    title2={'направлений'}
                />
                <Circle 
                    number={100}
                    title1={'более'}
                    title2={'учеников'}
                />
                <Circle 
                    number={3}
                    title1={'школе'}
                    title2={'года'}
                />
            </div>
        </div>
    )
}

export {Homepage}