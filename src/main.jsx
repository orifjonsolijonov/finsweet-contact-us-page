import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/header.jsx";
import Title from "./components/title/title.jsx"
import Form from "./components/form/form.jsx"
import Footer from "./components/footer/footer.jsx"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
    <Header />
    <Title />
    <Form />
    <Footer />
    </>
  </React.StrictMode>
);
