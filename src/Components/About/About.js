import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="container">
            <div class="row row-cols-1 row-cols-md-1 g-4 my-4">
                <div class="col">
                    <div class="card border border-primary">
                        <div class="card-body">
                            <h5 class="card-title border rounded-pill border-dark  text-center h-50">Our Mission and Vision</h5>
                            <p class="card-text fst-italic fw-bold">
                                <h4 className="text-primary">Mission</h4>
                                We are fully commited to remove social economical enequality by establishing Islamic Economy.
                                <h4 className="text-primary">Vision</h4>
                                Allah says:
                                Who is the one who would give Allah the Qarz-e-Hasna (Good loan) so that Allah multiplies it for him many times? And it is Allah that decreases or increases, and to Him you shall return.
                                (2:245) <br /><br />
                                If you advance the Qrz-e-Hasna (Good loan) to Allah, He will multiply it for you, and will forgive you. And Allah is Appreciative, Forbearing.
                                (64:17)<br />
                                The example of those who spend in the way of Allah is just like a grain that produced seven ears, each ear having a hundred grains, and Allah multiplies for whom He wills. Allah is All-Embracing, All-Knowing.
                                (2:261) < br />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border border-primary">
                        <div class="card-body">
                            <h5 class="card-title border rounded-pill border-dark  text-center h-50">About Foundation</h5>
                            <p class="card-text fst-italic fw-bold"><br /><span className="text-primary">This is a Non Profitable Foundation that help the society to overcome economic weakness.</span><br /> <br />
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
        </div>
    );
};
export default About;