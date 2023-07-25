import React from "react";
import "./Schedule.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
export default function Schedule() {
    return (
        <>
        <Nav/>
        <div>
            <h2 className="title">SCHEDULE</h2>
            <i style={{color: 'var(--color-white)', opacity: '0.7', fontSize: '14px'}}>* The timings may be subject to change, Contact event coordinator for queries.</i>
            <br />
            <i style={{color: 'var(--color-white)', opacity: '0.7', fontSize: '14px'}}>** Registration closes at 26-09-2021 for all events, Hack Salvation at 29-09-2021 and Precise Gunplay at 24-09-2021.</i>
            <div className="table_container">
                <table className="schedule_table">
                    <tr>
                        <th>Event</th>
                        <th>Round</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <th colSpan="3">Technical</th>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                            Codigo
                        </td>
                        <td>Round 1(30-09-2021)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td>Round 2(30-09-2021)</td>
                        <td>02:00 PM</td>
                    </tr>
                    <tr>
                        <td>Round 3(01-10-2021)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                            Ready Set Database
                        </td>
                        <td>Round 1(01-10-2021)</td>
                        <td>09:30 AM</td>
                    </tr>
                    <tr>
                        <td>Round 2(01-10-2021)</td>
                        <td>11:30 PM</td>
                    </tr>
                    <tr>
                        <td className="row_1">Untitled.Fig</td>
                        <td>Round 1(30-09-2021)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                            Nerdz Corner
                        </td>
                        <td>Round 1(30-09-2021)</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr>
                        <td>Round 2(30-09-2021)</td>
                        <td>2:00 PM</td>
                    </tr>
                    <tr>
                        <th colSpan="3">Non Technical</th>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                            Prepzap
                        </td>
                        <td>Round 1</td>
                        <td>
                            <i>Abstract shortlisting<br />(Results will be announced on 28-09-2021)</i>
                        </td>
                    </tr>
                    <tr>
                        <td>Round 2(30-09-2021)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                            Netflix Trifles
                        </td>
                        <td>Round 1(30-09-2021)</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr>
                        <td>Round 2(30-09-2021)</td>
                        <td>02:00 PM</td>
                    </tr>
                    <tr>
                        <td>Round 3(01-10-2021)</td>
                        <td>10:30 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="3" className="row_1">
                            Criction
                        </td>
                        <td>Round 1(30-09-2021)</td>
                        <td>11:00 AM</td>
                    </tr>
                    <tr>
                        <td>Round 2(30-09-2021)</td>
                        <td>02:30 PM</td>
                    </tr>
                    <tr>
                        <td>Round 3(01-10-2021)</td>
                        <td>10:00 AM</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="row_1">
                            Precise Gunplay
                        </td>
                        <td>Qualifiers(25-09-2021)</td>
                        <td><i>To be intimated</i></td>
                    </tr>
                    <tr>
                        <td>Finals(26-09-2021)</td>
                        <td><i>To be intimated</i></td>
                    </tr>
                    <tr>
                        <th colSpan="3">Hackathon</th>
                    </tr>
                    <tr>
                        <td className="row_1">Hack Salvation</td>
                        <td colSpan="2">30-09-2021(11 AM) to 01-10-2021(11 AM)</td>
                    </tr>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
}
