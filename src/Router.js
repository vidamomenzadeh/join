import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import MarkerPageContainer from './containers/StolenBikePageContainer';



const Root = ({store, history}) => {
    return <Provider store={store}>
        <Router history={history}>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={MarkerPageContainer} />
                </Switch>
            </Fragment>
        </Router>
    </Provider>
};

export default Root;
