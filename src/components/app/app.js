import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WelcomePage, ItemPage, SearchPage } from '../pages'
import ErrorBoundary from "../error-boundary";
import Header from "../header";
import ItemsViewPage from "../pages/items-view-page";
import { withMovieService } from "../HOC/";


class App extends Component {

    renderItemsPageWithRouterProps = (items, title) => {
        return props => <ItemsViewPage {...props} items={items} title={title} />
    };

    render() {
        const { movieService } = this.props;
        const defaultMovies = movieService.defaultMovies;
        const defaultSeries = movieService.defaultSeries;
        const moviesTitle = 'Here are some recommended movies :)';
        const seriesTitle = 'And some cool series :)';

        return (
            <ErrorBoundary>
                <Router>
                    <div className="container">
                        <Header />
                        <Switch>
                            <Route path="/" exact component={WelcomePage}/>
                            <Route
                                path="/movies"
                                exact
                                render={ this.renderItemsPageWithRouterProps(defaultMovies, moviesTitle) }  />
                            <Route
                                path="/series"
                                exact
                                render={ this.renderItemsPageWithRouterProps(defaultSeries, seriesTitle) }  />
                            <Route path="/search" component={SearchPage} />
                            <Route path="/:title" exact component={ItemPage} />
                        </Switch>

                    </div>
                </Router>
            </ErrorBoundary>
        );
    }
}

export default withMovieService()(App);