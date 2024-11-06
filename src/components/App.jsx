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
      <Avatar img="https://manga-jam.com/wp-content/uploads/part55/how_draw_madara-uchiha_naruto_10.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
