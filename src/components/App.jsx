import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import MyAvatar from "./MyAvatar";

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
      <MyAvatar src="/8.mp4" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
