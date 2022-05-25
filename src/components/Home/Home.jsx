import React, {useContext} from 'react';
import AutheContext from '../../state/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';


const Home = (props) => {
  const ctx = useContext(AutheContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogOut}>Logout</Button>
    </Card>
  );
};

export default Home;
