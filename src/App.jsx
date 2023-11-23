import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Member from './component/Member/Member';
import Addmember from './component/Addmember/Addmember';


function App() {
  // Data Load
  const [members, setmembers] = useState([]);
  useEffect(() =>{
    const fetching= (async()=>{
      const res = await fetch('https://randomuser.me/api/?results=100')
      let data= await res.json();
      data= data.results.slice(0,10);
      setmembers(data);
    })()
  }, [])

  // Add Team Member for Addmember Component
  const [addMembers, setAddMembers]= useState([]);
  const addMemberHandler= (e)=>{
    let addedMember= [...addMembers, e];
    setAddMembers(addedMember);
    
    // console.log(addedMember);
  }

  return (
    <div className="h-screen">
      <h1 className="p-4 text-center mb-2 text-red-700 font-black text-3xl underline bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... from-indigo-500">Adeed-New-Team-Player</h1>
        {
        addMembers.map(add => <Addmember addMember={add}></Addmember>)
        }
        {members.map(mem=> <Member addMemberHandler={addMemberHandler} memberInfo={mem}></Member>)}
    </div>
    
  )
}

export default App
