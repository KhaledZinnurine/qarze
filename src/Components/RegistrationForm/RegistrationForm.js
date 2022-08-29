import "./RegistrationForm.css";
import React from 'react'

const RegistrationForm = () => {
    return (
        <div>
            <div className="border border-primary rounded p-2 m-3  bg-gradient">
                <h1 className="text-center">Member Application Form</h1>
            </div>
            {/* This is first div row */}
            <div className="row container-xxl  g-2">
                <div className="col">
                    <div className="m-2">
                        <h6>Name</h6>
                        <input type="text" class="form-control border border-primary" placeholder="Full Name" />
                    </div>
                    <div className="m-2">
                        <h6>Member Type</h6>
                        <input type="text" class="form-control border border-primary" placeholder="Type-1,Type-2,Type-3" />
                    </div>
                </div>
                <div class="col input-group mb-3 ml-2 d-flex flex-column">
                    <div>
                        <h6 className=""> Applicant photo</h6>
                    </div>
                    <div className="mt-3 g-2">
                        <input type="file" class="form-control border border-primary" id="inputGroupFile02" />
                        <label class="input-group-text border border-primary" for="inputGroupFile02">Upload</label>                    
                    </div>
                </div>              
            
            </div>

                {/* Basic Info Row column */}
            <div className="row container-xxl row-cols-3 g-2 my-4 px-3">
                    <div className="col">
                        <h6>Birth Date</h6>
                    <input type="text" class="form-control border border-primary" placeholder="i.e. DD-MM-YYYY" />
                    </div>
                    <div className="col">
                        <h6>Gender</h6>
                    <input type="text" class="form-control border border-primary" placeholder="Male or Female" />
                    </div>            
                    <div className="col">
                        <h6>Religion</h6>
                    <input type="text" class="form-control border border-primary" placeholder="Muslim, Hindu, Cristian, Buddhist" />
                    </div>            
                    <div className="col">
                        <h6>Blood Group</h6>
                    <input type="text" class="form-control border border-primary" placeholder="A+,A-,B+,B- ....." />
                    </div>            
                    <div className="col">
                        <h6>Contact No</h6>
                    <input type="text" class="form-control border border-primary" placeholder="01XXX-XXXXXX" />
                    </div>            
                    <div className="col">
                        <h6>Email</h6>
                        <input type="text" class="form-control border border-primary" placeholder="Valid Email Id" />
                    </div>   
                                      
            </div>

            {/* NID Row col Div */}

            <div className="container-xxl">
                <div className="row">
                    <div className="col col-12">
                        <h6>NID Number</h6>
                        <input type="text" class="form-control border border-primary" placeholder="Valid Email Id" />
                    </div>
                    <div class="col col-6  input-group my-3  d-flex flex-column">
                        <div>
                            <h6 className=""> NID Front Side Image</h6>
                        </div>
                        <div className="">
                            <input type="file" class="form-control border border-primary" id="inputGroupFile02" />
                            <label class="input-group-text border border-primary" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                    <div class="col col-6 mb-3 input-group d-flex flex-column">
                        <div>
                            <h6 className="">NID Back Side Image</h6>
                        </div>
                        <div className="">
                            <input type="file" class="form-control border border-primary" id="inputGroupFile02" />
                            <label class="input-group-text border border-primary" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row container-xxl row-cols-3 g-2 my-4 px-3">
                <div className="col">
                    <h6>Father's Name</h6>
                    <input type="text" class="form-control border border-primary" placeholder="name of Father" />
                </div>
                <div className="col">
                    <h6>Mother's Name</h6>
                    <input type="text" class="form-control border border-primary" placeholder="Name of Mother" />
                </div>
                <div className="col">
                    <h6>Educational Qualification</h6>
                    <input type="text" class="form-control border border-primary" placeholder="Class or Degree" />
                </div>
                <div className="col">
                    <h6>Present Address</h6>
                    <input type="text" class="form-control border border-primary" placeholder="village, Upozila, District, Division" />
                </div>
                <div className="col">
                    <h6>Permanent Address</h6>
                    <input type="text" class="form-control border border-primary" placeholder="village, Upozila, District, Division" />
                </div>
                <div className="col">
                    <h6>Signature</h6>
                    <input type="text" class="form-control border border-primary" placeholder="eg. khaled" />
                </div>

            </div>



        </div>
    );
}
export default RegistrationForm;