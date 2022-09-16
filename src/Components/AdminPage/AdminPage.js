import "./AdminPage.css";
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../App";

const AdminPage = () => {
    const [qarzeReqInfo, setQarzeReqInfo] = useState([])
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "qarzeRequest"));
            // console.log(querySnapshot)
            let list = []
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`, doc);
                list.push({ ...doc.data(), id: doc.id })
            });
            setQarzeReqInfo(list)
        }
        getData()
    }, [])

    const [memberInfo, setMemberInfo] = useState([])
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "members"));
            // console.log(querySnapshot)
            let list2 = []
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`, doc);
                list2.push({ ...doc.data(), id: doc.id })
            });
            console.log(list2)
            setMemberInfo(list2)
        }
        getData()
    }, [])

    const handleDelete = async (data) => {
        console.log(data.id)
        const deleteResponse = await deleteDoc(doc(db, "qarzeRequest", data.id));
        console.log(deleteResponse)
    }

    return (
        <div>
            <div className=" container border border-primary rounded  my-2  bg-primary">
                <h1 className="text-center">This is Confidential Administration Page</h1>
            </div>

            {/*List of Qarze Request receiving from user. */}
            <div className='m-3 p-2'>
                <h4>For More details, Click the link.</h4>
                <p className="fw-bold"><a href="https://console.firebase.google.com/project/qarze-hasana/firestore/data/" target="_blank">Update Qarze Request Database</a></p>
                <table class="table table-bordered border-primary align-middle caption-top">
                    <caption>List of Qarze Request</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">NID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Qarze Type</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            qarzeReqInfo.map(doner =>
                            {
                                console.log(doner)
                                return (
                                    <tr key={doner.id}>
                                        <th scope="row"> {doner.name} </th>
                                        <td>{doner.contactNo} </td>
                                        <td>{doner.nid}</td>
                                        <td>{doner.email}</td>
                                        <td>{doner.type}</td>
                                        <td>{doner.amount}</td>
                                        <td>
                                            <button onClick={() => handleDelete({
                                                id: doner.id
                                            })}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* Partial Data of All Members */}
            <div className='m-3 p-2'>
                <h4>For More details, Click the link.</h4>
                <p className="fw-bold"><a href="https://console.firebase.google.com/project/qarze-hasana/firestore/data/" target="_blank">Update Members Database</a></p>
                <table class="table table-bordered border-primary align-middle caption-top">
                    <caption>Partial Data of All Members</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">NID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            memberInfo.map(doner =>
                                <tr key={doner._id}>
                                    <th scope="row"> {doner.name} </th>
                                    <td>{doner.contactNo} </td>
                                    <td>{doner.nid}</td>
                                    <td>{doner.email}</td>
                                    <td>{doner.bloodGroup}</td>
                                    <td>{doner.gender}</td>
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

export default AdminPage;
