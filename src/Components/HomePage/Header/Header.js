import React from "react";
import "./Header.css";
import img from '../../../images/logo2.jpg';

const Header = () => {
    return (
        <div className=" container-xxl  header-card bg-dark ">
            <div className="row">
                <div className="col" width={200}>
                    <img src={img} height={100} width={100} className="p-2"></img>
                </div>
                <div className="col">
                    <h1 className="text-white">Qarze Hasana Foundation</h1>
                    <h6 className='text-white'>We are fully commited to establish Islamic economy in society</h6>
                </div>
            </div>

        </div>
    );
};

export default Header;