import React from 'react';

// import images here
import Person from './Images/Person.svg';
import Warn from './Images/Warn.png';
import Vector from './Images/companyLogo.svg';
import Search from './Images/Search.png';
import Done from './Images/Done.png';
import rightArrow from './Images/rightArrow.svg';
import angleDown from './Images/angle-down.svg';
import wRightArrow from './Images/wRightArrow.svg';
import Dashboard from './Images/dashboard.svg';
import Folder from './Images/folder.svg';
import Resources from './Images/resources.svg';
import Calendar from './Images/calendar.svg';
import Chat from './Images/chatIcon.svg';
import Active from './Images/active.svg';
import Setting from './Images/settingsIcon.svg';
import SignOut from './Images/signOut.svg';
import Portfolio from './Images/Portfolio.svg';

// import constants here
import { languages  } from './constants/languageConstants';
import { languageTestData } from './constants/languageTestData';
import { result } from './constants/resultConstants';

// components
import Chart from './components/BarChart';

import './home.css';

export default function Home () {
    const dashboardItems = [
        {
            path: Dashboard,
            name: 'Dashboard',
            active: Active
        },
        {
            path: Folder,
            name: 'Classes'
        },
        {
            path: Resources,
            name: 'Resources',
        },
        {
            path: Calendar,
            name: 'Learning Plan',
        },
        {
            path: Chat,
            name: 'Chat',
        },
        {
            path: Setting,
            name: 'Settings'
        }
    ];

    return (
        <div className='main'>
            <div className='col1'>
                <div>
                    <img className='logo' src={Vector}/>
                    <p className='title'>Stringle</p>
                </div>
                <div>
                    {
                        dashboardItems.map((dashElem) => {
                            return <div style={{ marginTop: '-54px' }}>
                                <div style={{ display: 'flex', marginBottom: '-140px' }}>
                                    <img style={{ marginLeft: '-134px', marginTop: '160px' }} src={dashElem.path} />
                                    <p className='dashText' style={{ marginTop: '178px', marginLeft: '34px' }}>{dashElem.name}</p>
                                    {dashElem.name === 'Dashboard' ? <img style={{ marginLeft: '44px', marginBottom: '-164px' }} src={Active} /> : null}
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='submitButton'>
                    <submit className='buttonText'>Upgrade</submit>
                </div>
            </div>
            <div className='col2'>
                <div>
                    <div className='dateSearch'>
                        <p className='dateText'>22 Feb 2022</p>
                        <div className='searchBox'>
                            <img className='searchButton' src={Search} />
                        </div>
                    </div>
                    <div className='border'>
                        <div className='parentText'>
                            <p className='welcomeText'>Welcome back Anna!</p>
                            <p className='bText1'>
                                You’ve learned 80% of your goal this week!
                                <br/>
                                Keep it up and improve your results!
                            </p>
                        </div>
                        <div className='personDiv'>
                            <img className='person' src={Person} alt='' />
                        </div>
                    </div>
                    <div className='chartBox'>
                        <div className='resultBox'>
                            <div className='childResult1'>
                                <p className='resultText'>Latest Result</p>
                                <p className='subChildResult'>
                                    More Result
                                    <img className='arrow' src={rightArrow}/>
                                </p>
                            </div> 
                            <div className='results'>
                                {
                                    result.map((ele, idx) => {
                                        return <div>
                                            <div className='parentResult'>
                                                <div className='txtResultStyle'>
                                                <p className='unitStyle'>{`${ele.unit} - `}</p>
                                                <p className='domainStyle'>{ele.domain}</p>
                                                </div>
                                                <div className='prog_style'>
                                                    <progress className='result_progress' value={ele.value.split('%')[0]} max={100}/>
                                                    <p style={+ele.value.split('%')[0] <= 30? { color: 'red', fontSize: '14px' } : { fontSize: '14px' }}>{ele.value}</p>
                                                </div>
                                            </div>
                                            {(idx != result.length - 1) ? <hr/> : null } 
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className='learningBox'>
                            <div className='childLearning1'>
                                <p className='learningText'>Time Spent on Learning</p>
                                <p className='subChildLearning'>
                                    Last Week
                                    <img className='arrow' src={angleDown}/>
                                </p>
                            </div> 
                            <div className='chartHeader' style={{ display: 'flex', justifyContent: 'space-between', color: '#A2A2C2', marginLeft: '24px' }}>
                                <p style={{ paddingLeft: '2px' }}>Mon</p>
                                <p style={{ marginLeft: '-12px'}}>Tue</p>
                                <p style={{ marginLeft: '-8px'}}>Wed</p>
                                <p style={{ marginLeft: '-4px'}}>Thu</p>
                                <p>Fri</p>
                                <p style={{ marginLeft: '-5px'}}>Sat</p>
                                <p style={{ marginRight: '-20px'}}>Sun</p>
                            </div>
                            <div>
                                <div>
                                    <Chart/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='listOfCourses'>
                        <div style={{ display: 'flex' }}>
                            <p className='yourCourse'>Your Courses</p>
                            <p className='more'>
                                More
                                <img className='arrow' src={rightArrow}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent:'space-between' }}>
                            <div className='businessEnglish'>
                                <div>
                                    <div className='subStyle'></div>
                                    <p className='subText'>B2</p>
                                </div>
                                <div className='bTexts'>
                                    <p className='businessText'>Business English</p>
                                    <p className='businessSubText'>Grammar</p>
                                </div>
                                <div className='arrowSVG'>
                                    <img src={wRightArrow} />
                                </div>
                            </div>
                            <div className='commonEnglish'>
                                <div className='subStyle'></div>
                                <div className='subText'>B2</div>
                                <div className='bTexts'>
                                    <p className='businessText'>Common English</p>
                                    <p className='businessSubText'>Phrasal Verbs</p>
                                </div>
                                <div className='arrowSVG'>
                                    <img src={wRightArrow} />
                                </div>
                            </div>
                            <div className='businesSpanish'>
                                <div className='subStyle'></div>
                                <div className='subText'>C1</div>
                                <div className='bTexts'>
                                    <p className='businessText'>Business Spanish</p>
                                    <p className='businessSubText'>Vocabulary</p>
                                </div>
                                <div className='arrowSVG'>
                                    <img src={wRightArrow} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col3'>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='logoutText'>Logout</p>
                        <img className='logoutButton' src={SignOut}/>
                    </div>
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <img className='profileBox' src={Portfolio}/>
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <span className='userName'>Sadia Tasnim</span>
                </div>
                <div style={{ marginBottom: '64px' }}>
                    <span className='userCategory'>Student</span>
                </div>
                <div>
                {
                    languages.map((ele) => {
                       return <div className='eleRect'>
                           <div style={{ width: '50px' }}>
                                <div className='rect1'></div>
                                <div className='rect1txt'>{ele.sub}</div>
                           </div>
                            <div style={{ width: '180px', marginLeft: '16px' }}>
                                <div className='langTxt'>{ele.lang}</div>
                                <div className='langSub'>{ele.info}</div>
                            </div>
                            <div style={{ width: '54px' }}>
                                <progress className='prog1' value={ele.value} max={100}></progress>
                            </div>
                           </div>
                    })
                }
                </div>
            <div style={{ marginTop: '96px' }}>
                    {
                        languageTestData.map((info, idx) => {
                            return <div key={idx}>
                                <div style={{ display: 'flex', marginBottom: '32px' }}>
                                    <div className={info.status === 'warn' ? 'infoWarnRow' : 'infoDoneRow'}>
                                        <img className= 'infoSymbol' src={info.status === 'warn' ? Warn : Done } />
                                    </div>
                                    <div>
                                        <div className='infoHeader'>{info.info}</div>
                                        <div className='infoSubText'>{info.date}</div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};
