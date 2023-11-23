import { useState } from "react";

const Member = (props) => {
    const members = props.memberInfo;
    const names= `${members.name.title} ${members.name.first} ${members.name.last}`;
    // Toggle for Show/Hide Mobile Button State 
    const [mobile, setMobile]= useState(false);
    const showMobile= ()=>{
        setMobile(!mobile)
        setButton('Hide Mobile')
        setButton(!button)
    }
    const [button, setButton] =useState(true);


    return (
        <div className="bg-gray-200 pt-10 grid place-items-center">
            <div className="px-4 py-4 border-4 border-gray-500 w-72">
            <div className="flex justify-center text-center l"><img className="rounded-3xl" src={members.picture.large} alt="" /></div> 
            <h1 className="mt-5">Name: {names}</h1>
            <h3>Email: {members.email}</h3>
            <h4>Country: {members.location.country}</h4>
            <h5>Gender: {members.gender}</h5>
            <h5>age: {members.registered.age}</h5>
            <h1>Mobile: {mobile?<span>{members.phone}</span>:null}</h1> {/*ternary Condition for Button Toggle */}
            <div className="text-center">
                <button className="rounded-full bg-blue-700 py-2 px-6 hover:bg-green-600 text-white mt-2" onClick={()=>props.addMemberHandler(props.memberInfo)}>Add Me</button>
                <button className="w-32 ml-3 rounded-full bg-cyan-700 py-2 px-3 hover:bg-red-500 text-white mt-2" onClick={showMobile}>{button?<span>Show Mobile</span>:<span>Hide Mobile</span>}</button> {/*ternary Condition for Button Toggle */}
            </div>
            </div>
        </div>
    );
};

export default Member;