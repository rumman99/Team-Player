
const Addmember = (props) => {
    const member = props.addMember;
    console.log(member);
    const names= `${member.name.title} ${member.name.first} ${member.name.last}`;
    return (
        <div >
        <div className="m-5 border-4 border-red-600 w-72 p-4 border">
        <div ><img className="text-left rounded-3xl" src={member.picture.thumbnail} alt="" /></div> 
        <h1>Name: {names}</h1>
        <h3>Email: {member.email}</h3>
        <h4>Country: {member.location.country}</h4>
        <h5>Gender: {member.gender}</h5>
        <h5>age: {member.registered.age}</h5>
        <h1>Mobile: {member.phone}</h1>
        </div>
    </div>
    );
};

export default Addmember;