import React, { useState } from "react";
import { FaSave } from "react-icons/fa"; //React iconslar için kullanma

const Form = () => {
  const [formData, setFormData] = useState({
    label: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <div>
        <label
          htmlFor="purpose"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "5px",
          }}
        >
          purpose
        </label>
        <div id="purpose" style={{ display: "flex", gap: "10px" }}>
          <label>
            <input
              type="radio"
              name="purpose"
              value="client"
              onChange={handleChange}
            />
            Client
          </label>
          <label>
            <input
              type="radio"
              name="purpose"
              value="group"
              onChange={handleChange}
            />
            Group
          </label>
          <label>
            <input
              type="radio"
              name="purpose"
              value="agent"
              onChange={handleChange}
            />
            Agent
          </label>
        </div>
      </div>

      {/* Label */}
      <div>
        <label
          htmlFor="label"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "5px",
          }}
        >
          label
        </label>
        <input
          type="text"
          id="label"
          name="label"
          placeholder="Please write label to here."
          value={formData.label}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
          }}
        />
        <small style={{ color: "#aaa", fontSize: "12px" }}>
          Please write label to here.
        </small>
      </div>

      {/* Key */}
      <div>
        <label
          htmlFor="key"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "5px",
          }}
        >
          key
        </label>
        <input
          type="text"
          id="key"
          name="key"
          placeholder="Please write key to here."
          value={formData.key}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
          }}
        />
        <small style={{ color: "#aaa", fontSize: "12px" }}>
          Please write key to here.
        </small>
      </div>

      {/* Status */}
      <div>
        <label
          htmlFor="status"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "5px",
          }}
        >
          status
        </label>
        <div id="status" style={{ display: "flex", gap: "10px" }}>
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleChange}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="passive"
              onChange={handleChange}
            />
            Passive
          </label>
        </div>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%",

          gap: "8px",
        }}
      >
        <FaSave /> Save
      </button>
    </form>
  );
};

export default Form;
