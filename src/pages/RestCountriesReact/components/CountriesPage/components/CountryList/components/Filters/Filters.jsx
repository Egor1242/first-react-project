import { useState } from 'react';

import { filtersConstants } from '../../../../../../../../constants/filtersConstants';

import Slider from '@mui/material/Slider';

import "./style.sass"

export const Filters = () => {

    const [currentAreaFilterValue, setCurrentAreaFilterValue] = useState([0, 17098242])
    let [areaMin, areaMax] = currentAreaFilterValue;

    return (
        <div className="filter-block">
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
                <div className='filter-label'>
                    Dependence \ Independence:
                </div>
                <div className='radio'>
                    <div>
                        <input id='radio-independent' type="radio" value="Independent" name="dependece" />
                        <label htmlFor="radio-independent">Independent</label>
                    </div>
                    <div>
                        <input id='radio-dependent' type="radio" value="Dependent" name="dependece" />
                        <label htmlFor="radio-dependent">Dependent</label>
                    </div>
                    <div>
                        <input defaultChecked id='radio-both' type="radio" value="Both" name="dependece" />
                        <label htmlFor="radio-both">Both</label>
                    </div>
                </div>
            </div>
            <div className='car-side-filter'>
                <div className='radio'>
                    Car-side: {
                        filtersConstants?.carSide.map(
                            side =>
                                <div>
                                    <input defaultChecked id={"carSide" + side} type="radio" value={side} name="car-side" />
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
                                    <input defaultChecked id={"landlocked" + side} type="radio" value={side} name="landlocked" />
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
    )
}