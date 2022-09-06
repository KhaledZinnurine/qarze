import './BloodDonation.css';
import React, { useEffect, useState } from "react";
import bloodImage1 from "../../images/bloodCover.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../App';

const BloodDonation = () => {

    const [donersInfo, setDonersInfo] = useState([])
    const [ matchedResult, setMatchedResult] = useState([])

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "members"));
            // console.log(querySnapshot)
            let list = []
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`, doc);
                list.push(doc.data())
            });
            setDonersInfo(list)
        }
        getData()
    }, [])

    // console.log(donersInfo)

    const [dropDownInfo, setDropdownInfo] = useState('Blood Group')
    const handleDropdown = (value) => {
        setDropdownInfo(value)
    }
    const [dropDownInfo2, setDropdownInfo2] = useState('Division')
    const handleDropdown2 = (value) => {
        setDropdownInfo2(value)
    }

    const [memberInfo, setMemberInfo] = useState({})
    const handleInput = (e) => {
        setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value })
        // console.log(memberInfo)

    } 

    const handleSearchBtn = () => {

        const sbg = dropDownInfo.toLowerCase()
        const sdiv = dropDownInfo2.toLowerCase()
        const sdis = memberInfo?.district.toLowerCase()
        
        const matchedList = donersInfo.filter(doner => {
            const dbg = doner.bloodGroup?.toLowerCase()
            const ddis = doner.presentAddDistrict?.toLowerCase()
            const ddiv = doner.presentAddDivision?.toLowerCase()
         
            return sbg === dbg && sdiv === ddiv && sdis === ddis
        })
        
        console.log(matchedList)
        setMatchedResult(matchedList)
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
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{dropDownInfo ? dropDownInfo : ''}</button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" onClick={() => handleDropdown('A+')}>A+</li>
                        <li class="dropdown-item" onClick={() => handleDropdown('B+')}>B+</li>
                        <li class="dropdown-item" onClick={() => handleDropdown('AB+')}>AB+</li>
                        <li class="dropdown-item" onClick={() => handleDropdown('O+')}>O+</li>
                        <li> <hr class="dropdown-divider" /></li>
                        <li class="dropdown-item" onClick={() => handleDropdown('A-')}>A-</li>
                        <li class="dropdown-item" onClick={() => handleDropdown('B-')}>B-</li>
                        <li class="dropdown-item" onClick={() => handleDropdown('AB-')}>AB-</li>
                        <li class="dropdown-item" onClick={() => handleDropdown('O-')}>O-</li>
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

                    <input type="text" name="district" onChange={(e) => handleInput(e)} class="form-control" placeholder='Write District with correct spelling' />
                    <input type="text" name="thana" onChange={(e) => handleInput(e)} class="form-control" placeholder='Write Thana name with correct spelling' />
                    <button class="btn btn-outline-secondary" type="button" id=" " onClick={handleSearchBtn}>Search Donor</button>
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

                        { matchedResult.length ?
                            matchedResult.map(doner =>
                                <tr key={doner._id}>
                                    <th scope="row"> {doner.name} </th>
                                    <td>{doner.bloodGroup} </td>
                                    <td>{doner.contactNo}</td>
                                    <td>{doner.presentAddThana},{doner.presentAddDistrict},{doner.presentAddDivision}</td>
                                </tr>
                            )
                            :
                            donersInfo.map(doner =>
                                <tr key={doner._id}>
                                    <th scope="row"> {doner.name} </th>
                                    <td>{doner.bloodGroup} </td>
                                    <td>{doner.contactNo}</td>
                                    <td>{doner.presentAddThana},{doner.presentAddDistrict},{doner.presentAddDivision}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );

};
export default BloodDonation;