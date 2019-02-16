import React from 'react';

import TamrenaListItem from './TamrenaListItem';

const TamrenaList = (props) => {

    const TamrenaItem = props.tamrenas.map((tamrena, index) => {
        return <TamrenaListItem click={() => props.clicked(index)} key={tamrena.id} tamrena={tamrena} />
    });

    return (
        <div>
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        Get Your Tamrena Today..
                        Share Your Workouts..
                    </div>
                </div>
            </main>

            <main role="main" className="container">
                <div className="home-container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9">
                            <div className="body-container">
                                <ul className="list-group">
                                    {TamrenaItem}
                                </ul>
                            </div>
                        </div>
                        <div className="col d-none d-lg-block d-xl-block">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-subtitle text-muted">
                                        <form className="bd-search">
                                            <div className="form-group m-0">
                                                <input type="text" name="" value="" className="form-control"  placeholder="Filter Topics..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-text card-cat">
                                        <ul id="livefilter-list" className="list-unstyled">
                                            <li>
                                                <a className="" href="/c/games">Games</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TamrenaList;