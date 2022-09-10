import React from "react";
import "./Gallery.css";

import image1 from "../../images/Gallery/gallery13.jpg"
import image2 from "../../images/Gallery/gallery12.jpg"
import image3 from "../../images/Gallery/gallery3.jpg"
import image4 from "../../images/Gallery/gallery4.jpg"
import image5 from "../../images/Gallery/gallery11.jpg"
import image6 from "../../images/Gallery/gallery6.jpg"
import image7 from "../../images/Gallery/gallery7.jpg"
import image8 from "../../images/Gallery/gallery8.jpg"
import image9 from "../../images/Gallery/gallery10.jpg"
const Gallery = () => {
    return (
        <diV>

            <section class="container my-3" id="backpack">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Helping poor people by giving animals</h5>
                                <p class="card-text">
                                    Helping poor people in rural area. Those people are not capable of meeting their basic needs. An effort from out foundation may help them to be worthy or self depending. Thus after meeting their needs, they also may be contribute our national economy.
                                </p>
                            </div>
                            <div class="m-2">
                                <button class="panda-btn">See Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image2} class="card-img-top h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">One Day salary handovering</h5>
                                <p class="card-text">The employee with good hearted came our organization and donate their one day salary to help needy people. it was a rememberable moment for the organization.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See more</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image3} class="card-img-top h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tree Plantaion Project Plan</h5>
                                <p class="card-text">Trees give off oxygen that we need to breathe. Trees reduce the amount of storm water runoff, which reduces erosion and pollution in our waterways and may reduce the effects of flooding. Many species of wildlife depend on trees for habitat. Trees provide food, protection, and homes for many birds and mammals.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tubewell Project</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Home remaking from recovering Flood</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See Detail..</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Helping cute kids that smile them</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See Detail</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Making Home of Homeless</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sharing Meet in Eid-ul-Adha</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg border-0 h-100">
                            <img src={image9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Helping Flood Affected people</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                            <div class="m-3">
                                <button class="panda-btn">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </diV>
    );
};
export default Gallery;