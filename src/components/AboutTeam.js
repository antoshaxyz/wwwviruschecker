import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Hamza Maghrby", email: "hamza.salama@knf.stud.vu.lt" },
    { name: "Krasnovyd Maksym", email: "krasnovyd.maksym@knf.stud.vu.lt" },
    { name: "Volodymyr Antoniuk", email: "volodymyr.antoniuk@knf.stud.vu.lt" },
  ];

  return (
    <div className="team-page">
      <h1>Our team</h1>
      <ul className="team-list">
        {teamMembers.map((member, index) => (
          <li key={index} className="team-member">
            <p><strong>{member.name}</strong></p>
            <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
