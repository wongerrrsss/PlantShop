import React, { Component } from 'react';
import Image2 from "../../static/images/plantcaregif.gif";


class PlantCare extends Component {
    render() {
        return (
            <div className="plant-care-wrapper">
                <h3>some helpful plant care tips!</h3>
                <div className="floated">
                        <p>
                            <img src={Image2} alt='little-shop-of-horrors-plant-gif'></img>
                        </p>
                    </div>
                <ol>
                    <li> Avoid annoying little flies by being careful not to tip tea and coffee into plant containers. The sugars left in the compost make it an ideal breeding ground for sciarid flies. </li>
                    <li> Use trough planters as natural screens. They reduce noise and are useful as barriers to separate walkways etc.</li>
                    <li> DO NOT OVERWATER! One of the most common causes of plant death is over-watering.</li>
                    <li> Your plants need water, light and warmth to survive. So when you're off on vacation, don't forget about your green friends. 
                        Make sure that someone else knows to keep the blinds open and the thermostat up. 
                    </li>
                    <li> Peat free compost is suitable for all your indoor plants. Contact us <a href="/contact">here</a> for an excellent peat free alternative. </li>
                    <li> Variegated plants (featuring leaves with white edges or white flecks) often need more light than their green cousins. 
                        Keep them nearer to a window so that they can get all the light that they need. 
                    </li>
                    <li> Plants acclimatise slowly to different surroundings by changing their leaf orientation and structure. 
                        If you can, try not to move them around, as they may not adapt as easily as you think. 
                    </li>
                    <li> Plants reduce stress, but be careful of where you place them as people and plants breathe the same oxygen.</li>
                    <li> You can still have plants where space is at a premium. Some of the latest designs use tall containers to show off the plants, 
                        whilst taking up as little floor space as possible. 
                    </li>
                    <li> Regularly prune your plants to stop them becoming 'leggy'. 
                        Once they've lost the foliage on their lower branches, it's very difficult to get it to return.
                    </li>
                </ol>
            </div>
        )
    }
}

export default PlantCare; 