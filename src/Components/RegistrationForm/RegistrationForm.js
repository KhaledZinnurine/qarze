import "./RegistrationForm.css";
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../App";

const RegistrationForm = () => {

    const [memberInfo, setMemberInfo] = useState({})

    const handleInput = (e) => {
        // console.log(e)
        setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value })
        console.log(memberInfo)

    }

    const handleImageData = (e) => {
        // setSpinner(!spinner);
        const imgData = new FormData();
        // imgData.set("key", "95d6b9a2bf0db320d49744c0dda3c521");
        // imgData.append("image", e.target.files[0]);

        console.log(e.target.files[0])
    }

    const handleSubmitBtn = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "members"), memberInfo);
            console.log("Document written with ID: ", docRef.uid);
            e.target.reset()
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <form onSubmit={handleSubmitBtn}>
            <div className="border border-primary rounded p-2 m-3  bg-primary">
                <h1 className="text-center">Member Application Form</h1>
            </div>
            {/* This is first div row */}
            <div className="row container-xxl  g-2">
                <div className="col">
                    <div className="m-2">
                        <h6>Name</h6>
                        <input name="name" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Full Name" />
                    </div>
                    <div className="m-2">
                        <h6>Member Type</h6>
                        <input name='type' onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Type-1,Type-2,Type-3" />
                    </div>
                </div>
                <div class="col input-group mb-3 ml-2 d-flex flex-column">
                    <div>
                        <h6 className=""> Applicant photo</h6>
                    </div>
                    <div className="mt-3 g-2">
                        <input type="file"
                            accept="image/*"
                            onChange={handleImageData} class="form-control border border-primary" id="inputGroupFile02" />
                        <label class="input-group-text border border-primary" for="inputGroupFile02">Upload</label>
                    </div>
                </div>

            </div>

            {/* Basic Info Row column */}
            <div className="row container-xxl row-cols-3 g-2 my-4 px-3">
                <div className="col">
                    <h6>Birth Date</h6>
                    <input name="birthDate" onChange={(e) => handleInput(e)} type="date" class="form-control border border-primary" placeholder="i.e. DD-MM-YYYY" />
                </div>
                <div className="col">
                    <h6>Gender</h6>
                    <input name="gender" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Male or Female" />
                </div>
                <div className="col">
                    <h6>Religion</h6>
                    <input name="religion" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Muslim, Hindu, Cristian, Buddhist" />
                </div>
                <div className="col">
                    <h6>Blood Group</h6>
                    <input name="bloodGroup" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="A+,A-,B+,B- ....." />
                </div>
                <div className="col">
                    <h6>Contact No</h6>
                    <input name="contactNo" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="01XXX-XXXXXX" />
                </div>
                <div className="col">
                    <h6>Email</h6>
                    <input name="email" onChange={(e) => handleInput(e)} type="email" class="form-control border border-primary" placeholder="Valid Email Id" />
                </div>

            </div>

            {/* NID Row col Div */}

            <div className="container-xxl">
                <div className="row">
                    <div className="col col-12">
                        <h6>NID Number</h6>
                        <input name="nid" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="Valid NID Number" />
                    </div>
                    <div class="col col-6  input-group my-3  d-flex flex-column">
                        <div>
                            <h6 className=""> NID Front Side Image</h6>
                        </div>
                        <div className="">
                            <input type="file" name="nidFront" accept="image/*"
                                onChange={handleImageData} class="form-control border border-primary" id="inputGroupFile02" />
                            <label className="input-group-text border border-primary" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                    <div class="col col-6 mb-3 input-group d-flex flex-column">
                        <div>
                            <h6 className="">NID Back Side Image</h6>
                        </div>
                        <div className="">
                            <input type="file" name="nidBack" accept="image/*"
                                onChange={handleImageData} class="form-control border border-primary" id="inputGroupFile02" />
                            <label class="input-group-text border border-primary" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row container-xxl row-cols-3 gy-2 my-4 px-3">
                <div className="col">
                    <h6>Father's Name</h6>
                    <input name="fatherName" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Name of Father" />
                </div>
                <div className="col">
                    <h6>Mother's Name</h6>
                    <input name="motherName" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Name of Mother" />
                </div>
                <div className="col">
                    <h6>Educational Qualification</h6>
                    <input name="education" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Class or Degree" />
                </div>
                <div className="col py-3  ">
                    <h6>Present Address</h6>
                    <h6>Division</h6>
                    <input name="presentAddDivision" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary mb-2" placeholder="Division" />
                    <h6>District</h6>
                    <input name="presentAddDistrict" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="District" />
                    <h6>Thana</h6>
                    <input name="presentAddThana" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Thana" />
                </div>
                <div className="col py-3 ">
                    <h6>Permanent Address</h6>
                    <h6>Division</h6>
                    <input name="permanentAddDivision" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary mb-2" placeholder="Division" />
                    <h6>District</h6>
                    <input name="permanentAddDistrict" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="District" />
                    <h6>Thana</h6>
                    <input name="permanentAddThana" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Thana" />
                </div>
                <div className="col">
                    <h6>Signature</h6>
                    <input name="sign" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="eg. khaled" />
                </div>

            </div>

            {/* Nominee Information */}
            <div>
                <div className="border border-primary rounded p-1 m-2  bg-primary">
                    <h3 className="text-center">Nominee Information</h3>
                </div>

                <div className="row container-xxl row-cols-4 g-2 my-4 px-3">
                    <div className="col">
                        <h6>Name</h6>
                        <input name="nomName" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="" />
                    </div>
                    <div className="col">
                        <h6>Relationship</h6>
                        <input name="nomRelation" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="" />
                    </div>
                    <div className="col">
                        <h6>Gender</h6>
                        <input name="nomGender" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Male or Female" />
                    </div>
                    <div className="col">
                        <h6>Religion</h6>
                        <input name="nomReligion" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="" />
                    </div>
                </div>

                <div className="row container-xxl row-cols-3 g-2 my-4 px-3">
                    <div className="col">
                        <h6>Contact No</h6>
                        <input name="nomContactNo" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="01XXX-XX XX XX" />
                    </div>
                    <div className="col">
                        <h6>NID Number</h6>
                        <input name="nomNID" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="10 digit NID" />
                    </div>
                    <div className="col">
                        <h6>Father's Name</h6>
                        <input name="nomFatherName" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Name of Father" />
                    </div>
                    <div className="col">
                        <h6>Mother's Name</h6>
                        <input name="nomMotherName" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Name of Mother" />
                    </div>

                    <div className="col">
                        <h6>Present Address</h6>
                        <input name="nomPresentAdd" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="village, Upozila, District, Division" />
                    </div>
                    <div className="col">
                        <h6>Permanent Address</h6>
                        <input name="nomPermanentAdd" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="village, Upozila, District, Division" />
                    </div>
                </div>
            </div>

            <div class=" container d-grid gap-2 mb-3">
                <button type='sumbit' class="btn btn-primary">SUBMIT FORM</button>


            </div>
        </form>
    );
}
export default RegistrationForm;