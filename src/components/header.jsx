import { useRef } from "react";

import { NavLink } from "react-router-dom";


const Header = () => {

    const sliderDiv = useRef(null)

    return (
        <div className = "header-component">
            <div id="header-contents" ref={sliderDiv}>
                <div>
                    <h2>Programs</h2>
                    <ul>
                        <li>
                            <NavLink
                                to="/home/health"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                health
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/gender"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                gender
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/peace"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                peace
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/governance"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                governance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/climate"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                climate
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/education"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                education
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Insights</h2>
                    <ul>
                        <li>
                            <NavLink
                                to="/gallery"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                QUIDPOD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/resources"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                publications
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>About Us</h2>

                </div>
                <div>

                </div>
                <div>

                </div>
                
            </div>

        </div>
    )
}

export default Header