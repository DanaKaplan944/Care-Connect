import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import APIService from "../api/api";
import "react-big-calendar/lib/css/react-big-calendar.css";
import context from "../ctx/ctx";

const Home = () => {
  const localizer = momentLocalizer(moment);
  const ctx = useContext(context);
  const [events, setEvents] = useState([]);
  const [note, setNote] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const sendWeeklyReport = async () => {
    if (!ctx.userData) {
      alert("You must log in first");
      return;
    }

    try {
      // Call the sendWeeklyReport function from the APIService
      const response = await APIService.sendWeeklyReport(enteredEmail);
      setResponseMessage(response.message);
      alert("Weekly report email sent successfully");
    } catch (error) {
      console.error("Error sending the weekly report email", error);
    }
  };

  const makeDailyTasks = () => {
    const tasks = ctx?.taskData;

    const evts = tasks.map((t, idx) => {
      const template = {
        id: idx,
        title: t.taskSubject,
        allDay: true,
        start: new Date(),
        end: new Date(),
      };
      return template;
    });
    setEvents(evts);
    console.log(events);
  };

  const addNote = async () => {
    // console.log(ctx.userData._id);
    if (!ctx.userData) {
      alert("you must log in first");
    }
    try {
      const res = await APIService.addNote({
        noteSubject: note,
        createdAt: new Date(),
        caregiverID: ctx.userData._id,
      });
      if (res) {
        ctx.setNote(res);
        alert("note submitted");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    makeDailyTasks();
  }, [ctx.taskData]);

  return (
    <div className="">
      <h1>Welcome, {ctx.userData.firstName}</h1>
      <div style={{ height: "50vh" }}>
        <Calendar
          defaultView="day"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
      <div style={{ padding: "2rem" }}>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          style={{ height: "200px", width: "100%" }}
          onChange={(event) => setNote(event.target.value)}
        ></textarea>
        <button className="button" onClick={addNote}>
          Submit Daily Report
        </button>
        <br></br>
        <br></br>
        <label htmlFor="email">Enter the email to send the report to: </label>
        <input
          className="loginInputs"
          type="text"
          placeholder="Enter Email"
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <button className="button" onClick={sendWeeklyReport}>
          Send Weekly Report
        </button>
      </div>
    </div>
  );
};

export default Home;
