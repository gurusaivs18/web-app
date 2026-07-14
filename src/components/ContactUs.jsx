import "../css/ContactUs.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


// Validation schema
const contactSchema = Yup.object({
  name: Yup.string()
    // .min(4, "Name must be at least 4 characters")
    .required("Field is Required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Field is required"),

  message: Yup.string()
    .min(8, "Minimum 8 characters required")
    .required("Message is required"),
});

function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 style={{fontWeight:"bolder"}}>Contact Us</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values, { resetForm }) => {
          const subject = encodeURIComponent(
            `Contact Request from ${values.name}`,
          );

          const body = encodeURIComponent(
            `Name: ${values.name}\n\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
          );

          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=archita@nbventuresme.com&su=${subject}&body=${body}`,
            "_blank",
          );
          console.log(
            `https://mail.google.com/mail/?view=cm&fs=1&to=archita@nbventuresme.com&su=${subject}&body=${body}`,
          );

          resetForm();
        }}
      >
        {() => (
          <Form className="contact-form">
            <Field type="text" name="name" placeholder="Your Name" />
            <div className="error">
              <ErrorMessage name="name" />
            </div>

            <Field type="email" name="email" placeholder="Your Email" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>

            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              rows="5"
            />
            <div className="error">
              <ErrorMessage name="message" />
            </div>

            <button type="submit">Send Message</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
