import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

export default function BookingForm(props) {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  // const [email, setEmail] = useState("");
  // const [tel, setTel] = useState("");
  // const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  // const [occasion, setOccasion] = useState("");
  // const [preferences, setPreferences] = useState("");
  // const [comments, setComments] = useState("");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const navigate = useNavigate();

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const newDate = new Date();
  const dateString = newDate.toISOString().substring(0, 10);

  const newTime = props.availableTimes[0];

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      tel: "",
      people: 1,
      date: dateString,
      time: newTime,
      occasion: "",
      preferences: "",
      comments: "",
    },
    onSubmit: () => {
      const data = {
        fName: formik.values.fName,
        lName: formik.values.lName,
        people: formik.values.people,
        date: formik.values.date,
        time: formik.values.time,
        occasion:
          formik.values.occasion == "" ? "None" : formik.values.occasion,
        preferences:
          formik.values.preferences == "" ? "None" : formik.values.preferences,
        comments:
          formik.values.comments == "" ? "None" : formik.values.comments,
      };
      navigate("/confirmation", { state: data });
      formik.resetForm();
    },
    validationSchema: Yup.object({
      fName: Yup.string().required("Required"),
      lName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      tel: Yup.string().matches(phoneRegExp, "Invalid phone number"),
      people: Yup.number().required("Required"),
      date: Yup.string().required("Required"),
      occasion: Yup.string(),
      preferences: Yup.string(),
      comments: Yup.string(),
    }),
  });

  function handleDateChange(e) {
    formik.values.date = e.target.value;

    props.updateTimes(e.target.value);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form className="reservation-form" onSubmit={formik.handleSubmit}>
      <FormControl isInvalid={formik.touched.fName && formik.errors.fName}>
        <FormLabel htmlFor="fName">First Name</FormLabel>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          {...formik.getFieldProps("fName")}
        ></input>
        <FormErrorMessage>{formik.errors.fName}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.lName && formik.errors.lName}>
        <FormLabel htmlFor="lName">Last Name</FormLabel>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          {...formik.getFieldProps("lName")}
        ></input>
        <FormErrorMessage>{formik.errors.lName}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.email && formik.errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        ></input>
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.tel && formik.errors.tel}>
        <FormLabel htmlFor="phonenum">Phone Number</FormLabel>
        <input
          type="tel"
          id="tel"
          placeholder="(xxx)-xxx-xxxx"
          {...formik.getFieldProps("tel")}
        ></input>
        <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.people && formik.errors.people}>
        <FormLabel htmlFor="people">Number of People</FormLabel>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          {...formik.getFieldProps("people")}
        ></input>
        <FormErrorMessage>{formik.errors.people}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.date && formik.errors.date}>
        <FormLabel htmlFor="date">Select Date</FormLabel>
        <input
          type="date"
          id="date"
          value={formik.values.date}
          // {...formik.getFieldProps("date")}
          onChange={handleDateChange}
        ></input>
        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.time && formik.errors.time}>
        <FormLabel htmlFor="time">Select Time</FormLabel>
        <select
          id="time"
          value={formik.values.time}
          {...formik.getFieldProps("time")}
        >
          {finalTime}
        </select>
        <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={formik.touched.occasion && formik.errors.occasion}
      >
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <select id="occasion" {...formik.getFieldProps("occasion")}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
        <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={formik.touched.preferences && formik.errors.preferences}
      >
        <FormLabel htmlFor="preferences">Seating preferences</FormLabel>
        <select id="preferences" {...formik.getFieldProps("preferences")}>
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
        <FormErrorMessage>{formik.errors.preferences}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={formik.touched.comments && formik.errors.comments}
      >
        <FormLabel htmlFor="comments">Additional Comments</FormLabel>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          {...formik.getFieldProps("comments")}
        ></textarea>
        <FormErrorMessage>{formik.errors.comments}</FormErrorMessage>
      </FormControl>

      <div id="form-btn">
        <br></br>
        <button type="submit" className="hero-btn">
          Book Table
        </button>
        {/* <Link className="hero-btn" to="/confirmation">
          Book Table
        </Link> */}
      </div>
    </form>
  );
}
