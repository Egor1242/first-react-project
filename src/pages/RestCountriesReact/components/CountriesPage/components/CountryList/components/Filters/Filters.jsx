import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { filtersConstants } from '../../../../../../../../constants/filtersConstants';


import Slider from '@mui/material/Slider';

import "./style.sass"

export const Filters = ({ currentFilterResult, setCurrentFilterResult }) => {

    const [currentFilterValues, setCurrentFilterValues] = useState({
        carSide: "both",
        continents: [],
        landlocked:"both",
        independence : "both"
    }
    )



    const [currentAreaFilterValue, setCurrentAreaFilterValue] = useState([0, 17098242]);
    let [areaMin, areaMax] = currentAreaFilterValue;

    const [filterBlockHidden, setFilterBlockHidden] = useState(true);

    let filterBlockELement = document.querySelector(".filter-block")

    if (filterBlockELement) {

        if (filterBlockHidden) {
            filterBlockELement.classList.add("filter-block__wrapped")
        }
        else {
            filterBlockELement.classList.remove("filter-block__wrapped")
        }
    }

    return (
        <div className='filter'>
            <div className="filter-block filter-block__wrapped">
                <div className='area-filter'>
                    <div className='filter-label'>Area(км²): </div>
                    <input
                        value={areaMin}
                        onChange={(event) => setCurrentAreaFilterValue([event.target.value, areaMax])}
                    >

                    </input>
                    <Slider
                        className='slider'
                        getAriaLabel={() => 'Area range'}
                        value={currentAreaFilterValue}
                        min={1}
                        max={17098242}
                        onChange={(event) => setCurrentAreaFilterValue(event.target.value)}
                        valueLabelDisplay="auto"
                    />
                    <input
                        value={areaMax}
                        onChange={(event) => setCurrentAreaFilterValue([areaMin, event.target.value])}
                    >

                    </input>
                </div>
                <div className='dependence-filter'>
                    <div className='radio'>
                        Dependence \ Independence:
                        {
                            filtersConstants?.dependence.map(
                                value =>
                                    <div>
                                        <input id={"dependence" + value} type="radio" value={value} name="dependence" />
                                        <label htmlFor={"dependence" + value}>{value}</label>
                                    </div>
                            )
                        }
                    </div>

                </div>
                <div className='car-side-filter'>
                    <div className='radio'>
                        Car-side: {
                            filtersConstants?.carSide.map(
                                side =>
                                    <div>
                                        <input id={"carSide" + side} type="radio" value={side} name="car-side" />
                                        <label htmlFor={"carSide" + side}>{side}</label>
                                    </div>
                            )
                        }
                    </div>
                </div>
                <div className='landlocked-filter'>
                    <div className='radio'>
                        Landlocked: {
                            filtersConstants?.landlocked.map(
                                side =>
                                    <div>
                                        <input id={"landlocked" + side} type="radio" value={side} name="landlocked" />
                                        <label htmlFor={"landlocked" + side}>{side}</label>
                                    </div>
                            )
                        }
                    </div>
                </div>
                <div className='continents-filter'>
                    <div className='checkbox'>
                        <div className="checkbox-title">
                            Continents:
                        </div>
                        <div className="checkboxes">
                            {
                                filtersConstants?.continents?.map(
                                    continent =>
                                        <div>
                                            <input id={continent?.en} type="checkbox" value={continent?.en} name="continents" />
                                            <label htmlFor={continent?.en}>{continent?.ru}</label>
                                        </div>

                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div
                className="filter-switcher"
                onClick={() => setFilterBlockHidden(!filterBlockHidden)}
            >
                Filters <ArrowDropDownIcon />
            </div>
        </div>
    )
}