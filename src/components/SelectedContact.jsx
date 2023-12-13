import {useState, useEffect} from 'react'

export default function SelectedContact({selectedContactId}) {
    const [contact, setContact] = useState({})
    useEffect(()=>{
        async function fetchContact(){
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json(); 
            setContact(result);
            console.log(result)
        }
        fetchContact();
    },[])
    return (
      <div>
        <h1>Contact Details</h1>
        <h2>{contact.name}</h2>
        <h2>{contact.email}</h2>
        <h2>{contact.phone}</h2>
      </div>
    );
  }