import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/D5603AQGYOGdt1TB6WA/profile-displayphoto-shrink_400_400/0/1712672464220?e=1720656000&v=beta&t=PqJAVvsvd3NYagPFoum3U2yU0IEBj_-uAqPjMHkaS9w" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
