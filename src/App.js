import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
// import './App.css';

import './App.scss';

import { Calendar } from '@progress/kendo-react-dateinputs'
import KendoPie from "./components/KendoPie"
import KendoAppBar from "./components/KendoAppBar"

import { HashRouter, Switch, Route } from 'react-router-dom';
//import Dashboard from './pages/Dashboard.jsx';
//import Planning from './pages/Planning.jsx';
import Profile from './pages/Profile.jsx';
import Info from './pages/Info.jsx';
import Overview from './pages/Overview.jsx';
import DrawerRouterContainer from './components/DrawerRouterContainer.jsx';
import { AppContext } from './AppContext';
import { countries } from './resources/countries';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

function App() {

  const [contextState, setContextState] = React.useState({
    localeId: 'en-US',
    firstName: 'Lora',
    lastName: 'Roth',
    middleName: '',
    email: 'lora.roth@ecoresearch.com',
    phoneNumber: '(+1) 731333891',
    avatar: null,
    country: countries[33].name,
    isInPublicDirectory: true,
    biography: '',
    teamId: 1
  });
  const onLanguageChange = React.useCallback(
      (event) => { setContextState({...contextState, localeId: event.value.localeId}) },
      [contextState, setContextState]
  );
  const onProfileChange = React.useCallback(
      (event) => {
          setContextState({...contextState, ...event.dataItem});
      },
      [contextState, setContextState]
  );

  return (
    <div className="App">
      <LocalizationProvider language={contextState.localeId}>
          <IntlProvider locale={contextState.localeId}>
              <AppContext.Provider value={{...contextState, onLanguageChange, onProfileChange}}>
                  <HashRouter>
                      <DrawerRouterContainer>
                          <Switch>
                            
                            <Route exact={true} path="/" component={Info} /> 
                            <Route exact={true} path="/overview" component={Overview} /> 
                            <Route exact={true} path="/profile" component={Profile} />
                              {/* <Route exact={true} path="/" component={Dashboard} />
                              <Route exact={true} path="/planning" component={Planning} />
                              <Route exact={true} path="/profile" component={Profile} />
                              */}
                          </Switch>
                      </DrawerRouterContainer>
                  </HashRouter>
              </AppContext.Provider>
          </IntlProvider>
      </LocalizationProvider>
  </div>
  );
}

{/* <>
  <KendoAppBar/>
  <div className="App">
    <h1>Hello KendoReact!</h1>
    <Calendar/>
    <KendoPie/>
  </div>
</> */}

{/* <div className="App">
  <h1>Hello KendoReact!</h1>
  <Calendar/>
  <KendoPie/>
</div> */}

export default App;
