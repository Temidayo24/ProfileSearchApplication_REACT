import "./App.css";
import profile from "./Profile";
import React, { useState } from "react";

const App = () => {
  const [filteredProfile, setFilteredProfile] = new useState(profile);

  const profileLists = filteredProfile.map((person) => (
    <li key={person.id} className="profile">
      <img src={person.picture} alt={person.firstName + "'s picture"} />
      <div className="personProfile">
        <span className="personID">{person.id}</span>
        <span className="personName">
          {person.title + " " + person.firstName + " " + person.lastName}
        </span>
      </div>
    </li>
  ));

  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = [...profile];
    updatedList = updatedList.filter((person) => {
      return (
        person.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        person.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        person.id.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        person.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });

    setFilteredProfile(updatedList);
  };

  return (
    <div className="container">
      <form className="profileSearchBar">
        <input placeholder="Search by name..." onChange={filterBySearch} />
      </form>

      <ul className="profileContainer">{profileLists}</ul>
    </div>
  );
};

export default App;
