import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import PageWrapper from './containers/PageWrapper';
import AddPost from './screens/AddPost';

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (
            <PageWrapper>
              <Home />
            </PageWrapper>
          )} />
          <Route path='/add-post' render={(props) => (
            <PageWrapper>
              <AddPost />
            </PageWrapper>
          )} />
          <Route path='/about' render={(props) => (
            <PageWrapper>
              <About />
            </PageWrapper>
          )} />
        </Switch>
      </div>
    </>
  );
}

export default App;
