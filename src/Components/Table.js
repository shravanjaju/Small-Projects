import React, { useRef, useState } from "react";
import "./Table.css";
import Data from "./data.json";
import Edit from "./Edit/Edit";

export default function Table() {
  const [data, setData] = useState(Data);
  const [editItem, setEditItem] = useState(-1);

  function handleEdit(id) {
    setEditItem(id);
  }

  function handleUpdate(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;
    const city = e.target.elements.city.value;

    const updateData = data.map((d) =>
      d.id === editItem
        ? { ...d, name: name, email: email, phone: phone, city: city }
        : d
    );

    setData(updateData);

    setEditItem(-1);
  }

  function handleDelete(id) {
    const updateData = data.filter((d) => d.id !== id);
    setData(updateData);
  }

  return (
    <div className="table_wrap">
      <div>
        <AddMember setData={setData} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Action</th>
            </thead>
            {data.map((item) =>
              editItem === item.id ? (
                <Edit item={item} data={data} setData={setData} />
              ) : (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td>
                    <button
                      className="edit_btn"
                      onClick={() => handleEdit(item.id)}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="edit_btn"
                      type="button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
}

function AddMember({ setData }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const city = e.target.elements.city.value;

    const newData = {
      id: 2,
      name,
      email,
      phone,
      city
    };

    if (!name || !email || !phone || !city) {
      alert("Enter all fields");
      return;
    }

    setData((prevData) => prevData.concat(newData));
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    cityRef.current.value = "";
  }

  return (
    <form className="table_form" onSubmit={handleSubmit}>
      <div className="table_inp">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="inp_field"
          ref={nameRef}
        />
      </div>
      <div className="table_inp">
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="inp_field"
          ref={emailRef}
        />
      </div>
      <div className="table_inp">
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Phone No."
          className="inp_field"
          ref={phoneRef}
        />
      </div>
      <div className="table_inp">
        <input
          type="text"
          name="city"
          placeholder="Enter Your City"
          className="inp_field"
          ref={cityRef}
        />
      </div>

      <button className="add_btn">Add</button>
    </form>
  );
}