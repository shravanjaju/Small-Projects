import React from "react";
import "./Edit.css";

export default function Edit({ item, data, setData }) {
  function updateName(e) {
    const name = e.target.value;
    const updateData = data.map((d) =>
      d.id === item.id ? { ...data, name: name } : d
    );
    setData(updateData);
  }

  function updateEmail(e) {
    const email = e.target.value;
    const updateData = data.map((d) =>
      d.id === item.id ? { ...data, email: email } : d
    );
    setData(updateData);
  }

  function updatePhone(e) {
    const phone = e.target.value;
    const updateData = data.map((d) =>
      d.id === item.id ? { ...data, phone: phone } : d
    );
    setData(updateData);
  }

  function updateCity(e) {
    const city = e.target.value;
    const updateData = data.map((d) =>
      d.id === item.id ? { ...data, city: city } : d
    );
    setData(updateData);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={updateName}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          value={item.email}
          onChange={updateEmail}
        />
      </td>
      <td>
        <input
          type="text"
          name="phone"
          value={item.phone}
          onChange={updatePhone}
        />
      </td>
      <td>
        <input
          type="text"
          name="city"
          value={item.city}
          onChange={updateCity}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}