import "./Home.css";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 

import countMember from "../../../images/membership.png"
import countGQ from "../../../images/my-bg.png"
import countSQ from "../../../images/student.png"
import countBD from "../../../images/blood.png"
import admin1 from "../../../images/khaled_1.png"
import admin2 from "../../../images/khaled_2.png"
import { db } from "../../../App";



const Home = () => {
    document.title = "Home"
    const [members, setMembers] = useState([])
    const [generalQarze, setGeneralQarze] = useState([])
    const [studentQarze, setStudentQarze] = useState([])
    const [bloodDonation, setBloodDonation] = useState([])

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "members"));
            // console.log(querySnapshot)
            let list =[]
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`, doc);
                list.push(doc.data())
            });
            setMembers(list)


            const querySnapshot1 = await getDocs(collection(db, "generalQarze"));
            // console.log(querySnapshot)
            let list1 = []
            querySnapshot1.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`, doc);
                list1.push(doc.data())
            });
            setGeneralQarze(list1)

            const querySnapshot2 = await getDocs(collection(db, "studentQarze"));
            // console.log(querySnapshot)
            let list2 = []
            querySnapshot2.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`, doc);
                list2.push(doc.data())
            });
            setStudentQarze(list2)

            const querySnapshot3 = await getDocs(collection(db, "bloodDonation"));
            // console.log(querySnapshot)
            let list3 = []
            querySnapshot3.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`, doc);
                list3.push(doc.data())
            });
            setBloodDonation(list3)
        }
        getData();

    }, [])
    
    

    return (
        <div>
            <div className="">
                <Carousel></Carousel>
            </div>

            <div className="container">
                {/* Administration Figures */}
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card h-100 border border-primary">
                            <img src={admin1} class="card-img-top w-50 h-50 rounded mx-auto d-block p-2" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">MD Khaled Zinnurine</h5>
                                <p class="card-text">Chairman of Qarze Hasana Foundation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border border-primary">
                            <img src={admin2} class="card-img-top w-50 h-50 rounded mx-auto d-block p-2" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">MD Khaled Zinnurine</h5>
                                <p class="card-text">General Secretery of QHF</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Latest News</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Mission and Vision and About Foundation */}
                <div class="row row-cols-1 row-cols-md-2 g-4 my-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-body " style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                                <h5 class="card-title border rounded-pill  text-center h-50">Our Mission and Vision</h5>
                                <p class="card-text  fw-bold">
                                    <h4 className="text-primary">Mission</h4>
                                    We are fully commited to remove social economical enequality by establishing Islamic Economy.
                                    <h4 className="text-primary">Vision</h4>
                                    <p className="fst-italic"> Allah says:
                                        Who is the one who would give Allah the Qarz-e-Hasna (Good loan) so that Allah multiplies it for him many times? And it is Allah that decreases or increases, and to Him you shall return.
                                        (2:245) <br /><br />
                                        If you advance the Qrz-e-Hasna (Good loan) to Allah, He will multiply it for you, and will forgive you. And Allah is Appreciative, Forbearing.
                                        (64:17)<br />
                                        The example of those who spend in the way of Allah is just like a grain that produced seven ears, each ear having a hundred grains, and Allah multiplies for whom He wills. Allah is All-Embracing, All-Knowing.
                                        (2:261) < br /></p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                                <h5 class="card-title border rounded-pill  text-center h-50">About Foundation</h5>
                                <p class="card-text  fw-bold"><br /><span className="text-primary">This is a Non Profitable Foundation that help the society to overcome economic weakness.</span><br /> <br />
                                    <h4 className="text-primary">Our main concern is:</h4> 
                                    <ol className="">
                                        <li>Helping Poor People for the sake of Allah </li>
                                        <li>Helping Interprenter to build up their business and then give back load</li>
                                        <li>Helping poor student by providing monthl stipen</li>
                                        <li>Helping Student giving student load before their semester started</li>
                                        <li>Establishing a Blood Bank</li>
                                        <li>Voluenteer activities during Natural Disesters</li>
                                        <li>Keeping Environment Clean</li>
                                        <li>Tree Plantaion</li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fast and Easy Application Process */}
                <div>
                    <h2 className="text-center text-primary mb-2">Fast and Easy Application Process </h2>
                    <div className="mb-4">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 border border-primary">
                                    <div class="card-body">
                                        <h5 class="card-title  text-center h-50">Step-1</h5>
                                        <p class="card-text  border  bg-card-title text-center fw-bold fs-4">Choose Your Amount</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col ">
                                <div class="card h-100 border border-primary ">
                                    <div class="card-body">
                                        <h5 class="card-title  text-center h-50">Step-2</h5>
                                        <p class="card-text border bg-card-title text-center fw-bold fs-4">Wait for Approval</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border border-primary">
                                    <div class="card-body">
                                        <h5 class="card-title  text-center h-50">Step-3</h5>
                                        <p class="card-text border bg-card-title  text-center fw-bold fs-4">Get your Cash</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counts from database */}
                <div className="">
                    <div className="mb-3 d-flex justify-item-center">
                       <Link to='/register' className="mx-auto"><button className="btn btn-success mx-auto">BE A MEMBER</button></Link> 
                    </div>
                    <div className="mb-3">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100 border border-primary">
                                    <img src={countMember} class="card-img-top w-50 h-50 rounded mx-auto d-block p-2" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title">{members.length}</h5>
                                        <p class="card-text">No of Member </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border border-primary">
                                    <img src={countGQ} class="card-img-top  w-50 h-50 rounded mx-auto d-block p-2" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title">{generalQarze.length}</h5>
                                        <p class="card-text">General Qarze</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border border-primary">
                                    <img src={countSQ} class="card-img-top  w-50 h-50 rounded mx-auto d-block p-2" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title">{studentQarze.length}</h5>
                                        <p class="card-text">Student Qarze</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border border-primary">
                                    <img src={countBD} class="card-img-top  w-50 h-50 rounded mx-auto d-block p-2" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title">{bloodDonation.length}</h5>
                                        <p class="card-text">Blood Donations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

};

export default Home;