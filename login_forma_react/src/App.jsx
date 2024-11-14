import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const initalValues = { user: "", email: "", pass: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormReset = () => {
    setFormValues(initalValues);
    setFormErrors({});
    setIsSubmit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(validate(formValues)).length === 0) {
      emailjs
        .sendForm(
          "service_ahduoum",
          "template_vhrmxq5",
          form.current,
          "jGSFsT-qrLAUbYRCR"
        )
        .then(
          (result) => {
            handleFormReset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const validate = (v) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!v.user) {
      errors.user = "Korisničko ime nije ispravno upisano";
    }
    if (!v.email) {
      errors.email = "E-mail nije ispravno upisan";
    } else if (!regex.test(v.email)) {
      errors.email = "Niste unijeli ispravnu mail adresu";
    }
    if (!v.pass) {
      errors.pass = "Lozinka nije ispravno upisana";
    } else if (v.pass.length < 6) {
      errors.pass = "Lozinka mora imati više od 6 znakova";
    }
    return errors;
  };

  const form = useRef();

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="title">Uspjeh</p>
      ) : (
        <p>Ispunite formu</p>
      )}
      <form onSubmit={handleSubmit} ref={form}>
        <h1>Login forma</h1>
        <hr />
        <div className="form">
          <div>
            <label>Korisničko ime</label>
            <input
              type="text"
              name="user"
              value={formValues.user}
              placeholder="Unesite..."
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.user}</p>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Unesite..."
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div>
            <label>Lozinka</label>
            <input
              type="password"
              name="pass"
              value={formValues.pass}
              placeholder="Unesite..."
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pass}</p>
          <button className="btn">Pošaljite</button>
        </div>
      </form>
    </div>
  );
};

export default App;
