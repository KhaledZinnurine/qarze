import './BloodDonation.css';
import React, { useState } from "react";
import bloodImage1 from "../../images/bloodCover.jpg";

const BloodDonation = () => {


    const [dropDownInfo, setDropdownInfo] = useState('Blood Group')
    const handleDropdown = (value) => {
        setDropdownInfo(value)
    }
    const [dropDownInfo2, setDropdownInfo2] = useState('Division')
    const handleDropdown2 = (value) => {
        setDropdownInfo2(value)
    }
    return (
        <div className="px-2 py-2">
            <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src={bloodImage1} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className=' p-3 border border-success m-3'>
                <div class="input-group">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{dropDownInfo ? dropDownInfo:''}</button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" onClick={()=>handleDropdown('A+')}>A+</li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('B+')}>B+</li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('AB+')}>AB+</li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('O+')}>O+</li>
                        <li> <hr class="dropdown-divider" /></li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('A-')}>A-</li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('B-')}>B-</li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('AB-')}>AB-</li>
                        <li class="dropdown-item" onClick={()=>handleDropdown('O-')}>O-</li>
                    </ul>

                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{dropDownInfo2 ? dropDownInfo2 : ''}</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li class="dropdown-item" onClick={() => handleDropdown2('Barisal')}>Barisal</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Chattogram')}>Chattogram</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Dhaka')}>Dhaka</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Khulna')}>Khulna</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Rajshahi')}>Rajshahi</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Rangpur')}>Rangpur</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Mymensingh')}>Mymensingh</li>
                        <li class="dropdown-item" onClick={() => handleDropdown2('Sylhet')}>Sylhet</li>
                    </ul>

                    <input type="text" class="form-control" placeholder='Write District with correct spelling' />
                    <input type="text" class="form-control" placeholder='Write Thana name with correct spelling' />
                    <button class="btn btn-outline-secondary" type="button" id=" ">Search Donor</button>
                </div>


            </div>

            <div className='m-3 p-2'>
                <table class="table table-bordered border-primary align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> Abdullah </th>
                            <td>B+</td>
                            <td>01863-332334</td>
                            <td>Boalia, Rajshahi</td>
                        </tr>
                        <tr>
                            <th scope="row">Jacobi</th>
                            <td>A-</td>
                            <td>01783-223322</td>
                            <td>Talaimari, Rajshahi</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                        <tr>
                            <th scope="row"> Khaled</th>
                            <td>B+</td>
                            <td>01745461819</td>
                            <td>Natore</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );

};
export default BloodDonation;