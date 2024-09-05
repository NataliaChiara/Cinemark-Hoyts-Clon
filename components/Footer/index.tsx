import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.container__content}>
        <p>
          Sitio web de practica, sin usos comerciales, el diseño corresponde a{" "}
          <a href="https://www.cinemarkhoyts.com.ar/">
            ©CinemarkHoytsArgentina
          </a>{" "}
          - Agosto 2024
          <br />
          Recreado por{" "}
          <a href="https://nataliachiara.vercel.app/">Natalia Chiara</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
