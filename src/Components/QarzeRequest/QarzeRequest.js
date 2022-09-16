import "./QarzeRequest.css";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../App";

const QarzeRequest = () => {

    const [qarzeReqInfo, setQarzeReqInfo] = useState({})

    const handleInput = (e) => {
        console.log(e)
        setQarzeReqInfo({ ...qarzeReqInfo, [e.target.name]: e.target.value })
        console.log(qarzeReqInfo)
    }
    const handleSubmitBtn = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "qarzeRequest"), qarzeReqInfo);
            console.log("Document written with ID: ", docRef.uid);
            e.target.reset()

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <form className="container my-3 border border-primary" onSubmit={handleSubmitBtn}>
            <div className="border border-primary rounded my-2 bg-primary">
                <h2 className="text-center">Qarze Request Form</h2>
            </div>
            <div className="my-2">
                <h6>Name</h6>
                <input name="name" onChange={(e) => handleInput(e)} type="text" class="form-control border border-primary" placeholder="Full Name" />
            </div>
            <div className="mb-2">
                <h6>Contact No</h6>
                <input name="contactNo" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="01XXX-XXXXXX" />
            </div>
            <div className="mb-2">
                <h6>Email</h6>
                <input name="email" onChange={(e) => handleInput(e)} type="email" class="form-control border border-primary" placeholder="Valid Email Id" />
            </div>
            <div className="mb-2">
                <h6>NID Number</h6>
                <input name="nid" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="Valid NID Number" />
            </div>

            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01" >Qarze Type</label>
                <select class="form-select" id="inputGroupSelect01" name="type" onChange={(e) => handleInput(e)}>
                    <option selected>Choose...</option>
                    <option value="general">General</option>
                    <option value="student">Student</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect02">Duration</label>
                <select class="form-select" id="inputGroupSelect02" name="duration" onChange={(e) => handleInput(e)}>
                    <option selected>Choose...</option>
                    <option value="6 month">6 months</option>
                    <option value="12 month">12 months</option>
                </select>

            </div>
            <div className="mb-2">
                <h6>Amount of Requested Qarze</h6>
                <input name="amount" onChange={(e) => handleInput(e)} type="number" class="form-control border border-primary" placeholder="Amount in Taka" />
            </div>

            <div class=" container d-grid gap-2 mb-3">
                <button type='sumbit' class="btn btn-primary">REQUEST FOR LOAN</button>
            </div>

        </form >
    );
};

export default QarzeRequest;