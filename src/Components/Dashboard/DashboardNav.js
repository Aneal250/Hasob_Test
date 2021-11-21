import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoggedOut } from '../Store/authSlice'
import Semester from '../Dashboard/Semester'
import './DashboardNav.css'
import desktop from '../../img/desktop.svg'
import dashboard from '../../img/dashboard.svg'
import semesters from '../../img/semesters.svg'
import faculty from '../../img/faculty.svg'
import programs from '../../img/programs.svg'
import classes from '../../img/classes.svg'
import settings from '../../img/settings.svg'
import logout from '../../img/logout.svg'
import Programs from './Programs'
import Faculty from './Faculty'
import SideBar from '../UI/SideBar'
import Dashboard from './Dashboard'


function DashboardNav() {

    const history = useHistory()
    let { path, url } = useRouteMatch();

    const dispatch = useDispatch()

    const Logout = () => {

        history.replace('/')
        dispatch(LoggedOut())
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row p-0">
                    <div className="col-md-1 p-0">
                        <nav className="dash_nav_container">
                            <div className="mb-5">
                                <img className="img" src={desktop} alt="" />
                            </div>

                            <div>
                                <img src={dashboard} alt="" />
                            </div>
                            <div className="mb-3"> <Link to={`${url}/`}>Dashboard</Link></div>
                            <div>
                                <img src={semesters} alt="" />
                            </div>
                            <div className="mb-3"> <Link to={`${url}/semester`}>Semester</Link></div>

                            <div>
                                <img src={faculty} alt="" />
                            </div>
                            <div className="mb-3"> <Link to={`${url}/faculty`}>Faculty</Link></div>
                            <div>
                                <img src={programs} alt="" />
                            </div>
                            <div className="mb-3"> <Link to={`${url}/programs`}>Program</Link></div>
                            <div>
                                <img src={classes} alt="" />
                            </div>
                            <div className="mb-3"> <Link href="http://">Classes</Link></div>
                            <div>
                                <img src={settings} alt="" />
                            </div>
                            <div className="mb-3"> <Link href="http://">Settings</Link></div>
                            <div>
                                <img src={logout} alt="" />
                            </div>
                            <div className="mb-3"> <Link onClick={Logout}>Logout</Link></div>


                        </nav >
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path={`${path}/semester`}>
                                <Semester />
                            </Route>
                            <Route path={`${path}/programs`}>
                                <Programs />
                            </Route>
                            <Route path={`${path}/faculty`}>
                                <Faculty />
                            </Route>
                            <Route path={`${path}/`}>
                                <Dashboard />
                            </Route>
                        </Switch>

                    </div>
                    <div className="col-md-2 p-0">
                        <div className="dash_nav_sidebar">
                            <SideBar />
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default DashboardNav
