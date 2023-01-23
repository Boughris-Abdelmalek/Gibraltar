import styles from "./form.module.css";
import { Box, Button, TextField } from "@mui/material";
import logoSvg from "../../assets/images/logo.svg";
import logo from "../../assets/images/logo.png";

const Form = ({ title, setEmail, setPassword, handleAction, register }) => {
  return (
    <div className={styles.formContainerOuter}>
      <div className={styles.logoContainer}>
        <img src={logoSvg} alt="logoImg" className={styles.logoImg} />
        <img src={logo} alt="logoTxt" className={styles.logoTxt} />
      </div>
      <Box
        component="form"
        sx={{
          "& > not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className={styles.formContainer}
        onSubmit={handleAction}
      >
        <h3>{title}</h3>
        <TextField                                   
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {register && <TextField
          id="outlined-basic"
          label="Re-enter password"
          type="password"
          variant="outlined"
          required
        />}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#febd69",
            boxShadow: "inset -1px -2px 10px 2px rgba(125,123,125,.25)",
            borderRadius: "5px",
            border: "1px solid rgba(125,123,125, .5)",
            "&:hover": {
              backgroundColor: "#febd70",
              boxShadow: "inset -1px -2px 10px 2px rgba(125,123,125,.5)",
            },
          }}
          type="submit"
        >
          {title}
        </Button>
        <p>
          Already have an account ? <strong>Sign in</strong>
        </p>
      </Box>
    </div>
  );
};

export default Form;
