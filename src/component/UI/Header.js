import {
  AppBar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const useStyles = makeStyles((theme) => ({
  logo: {
    height: "7em",
  },
  toolbarMargin: {
    marginBottom: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "700",
    minWidth: 10,
    marginLeft: "25px",
    outLine: "none",
    border: "none",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      textDecoration: "none",
      opacity: 1,
    },
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontSize: "1rem",
    fontFamily: "Pacifico",
    textTransform: "none",
    color: "white",
    height: "45px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
function Header() {
  const [value, setvalue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, value) => {
    setvalue(value);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setvalue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setvalue(1);
    } else if (window.location.pathname === "/resolutions" && value !== 2) {
      setvalue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setvalue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setvalue(4);
    }
  }, [value]);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Button
            onClick={() => setvalue(0)}
            component={Link}
            to="/"
            className={classes.logoContainer}
          >
            <img className={classes.logo} src={logo} alt="logo--img" />
          </Button>

          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
          >
            <Tab
              component={NavLink}
              to="/"
              outLine="none"
              className={classes.tab}
              label="Home"
            />
            <Tab
              component={NavLink}
              to="/services"
              className={classes.tab}
              label="Services"
            />
            <Tab
              component={NavLink}
              to="/resolutions"
              className={classes.tab}
              label="The Revolutions"
            />
            <Tab
              component={NavLink}
              to="/about"
              className={classes.tab}
              label="About Us"
            />
            <Tab
              component={NavLink}
              to="/contact"
              className={classes.tab}
              label="Contact Us"
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
