import {useState} from "react";
import ContactRow from './ContactRow'
import {useEffect} from 'react'



export default function ContactList({setSelectedContactId}) {
  const [contacts, setContacts] = useState([])
  console.log(contacts)
  useEffect(()=>{
    async function fetchContacts(){
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
        const result = await response.json(); 
        setContacts(result); 
        console.log(result)
   
      } catch(error) {
        console.log(error); 
      }
    }
    fetchContacts()
    
  },[]);

  console.log(contacts)
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
              {contacts.map((contact) => {
                return <ContactRow setSelectedContactId={setSelectedContactId} key={contact.id} contact={contact} />;
              })}
          </tbody>
        </table>
    ); 

}