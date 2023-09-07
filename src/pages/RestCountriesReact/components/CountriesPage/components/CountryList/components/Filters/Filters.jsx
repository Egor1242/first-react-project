import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { filtersConstants } from '../../../../../../../../constants/filtersConstants';

import "./style.sass"

export const Filters = ({ currentFilterValues, setCurrentFilterValues }) => {

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
                <div className='dependence-filter'>
                    <div className='radio'>
                        Dependence \ Independence:
                        {
                            filtersConstants?.independent.map(
                                value =>
                                    <div key={value}>
                                        <input
                                            onChange={
                                                () => {
                                                    let newFilterResult = Object.assign({}, currentFilterValues);
                                                    newFilterResult.independent = value;
                                                    setCurrentFilterValues(newFilterResult);
                                                }
                                            }
                                            defaultChecked={value === currentFilterValues.independent ? true : undefined}
                                            id={value}
                                            type="radio"
                                            name="dependence" />
                                        <label htmlFor={value}>{value == "both" ? value : (value ? "Independent" : "Dependent")}</label>
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
                                        <input
                                            id={"carSide" + side}
                                            type="radio"
                                            onChange={
                                                () => {
                                                    let newFilterResult = Object.assign({}, currentFilterValues);
                                                    newFilterResult.carSide = side;
                                                    setCurrentFilterValues(newFilterResult);
                                                }
                                            }
                                            defaultChecked={side === currentFilterValues.carSide ? true : undefined}
                                            name="car-side" />
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
                                value =>
                                    <div>
                                        <input
                                            id={"landlocked" + value}
                                            type="radio"
                                            onChange={
                                                (e) => {
                                                    let newFilterResult = Object.assign({}, currentFilterValues);
                                                    newFilterResult.landlocked = value;
                                                    setCurrentFilterValues(newFilterResult);
                                                }
                                            }
                                            defaultChecked={value === currentFilterValues.landlocked ? true : undefined}
                                            name="landlocked" />
                                        <label htmlFor={"landlocked" + value}>
                                            {value == "both" ? value : (value ? "yes" : "no")}
                                        </label>
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
                                            <input
                                                id={continent?.en}
                                                type="checkbox"
                                                onChange={
                                                    (e) => {
                                                        let newFilterResult = Object.assign({}, currentFilterValues);

                                                        if (e.target.checked) {
                                                            newFilterResult.continents.push(continent?.en)
                                                        }
                                                        else {
                                                            newFilterResult.continents = newFilterResult.continents.filter((curContinent) => curContinent != continent?.en)
                                                        }

                                                        setCurrentFilterValues(newFilterResult);
                                                    }
                                                }
                                                checked={currentFilterValues?.continents?.includes(continent?.en) ? true : undefined}
                                                name="continents" />
                                            <label htmlFor={continent?.en}>{continent?.ru}</label>
                                        </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>

            </div>
            <div className="filter-switcher"
                onClick={() => setFilterBlockHidden(!filterBlockHidden)}
            >
                Filters <ArrowDropDownIcon />
            </div>
        </div>
    )
}