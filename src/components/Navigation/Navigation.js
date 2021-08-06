import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './navigation.module.scss';
const Navigation = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/user', {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        console.log(result);
        let name = undefined;
        if (result && result.fullName) {
          name = result.fullName;
        }
        setUser({ fullName: name });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <nav className={classes.nav_containter}>
      <ul className={classes.nav_brand}>
        <Link to="/">
          <li>Beer Brand</li>
        </Link>
      </ul>
      <ul className={classes.nav_menu}>
        <li>cart</li>
        <Link to="/login">
          <li>{user.fullName ? user.fullName : 'login'}</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;
