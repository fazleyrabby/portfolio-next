import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/Container";
import { useReactToPrint } from 'react-to-print';
import { useRef } from "react";

export default function Resume() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <Container>
            <Head>
                <title>Portfolio | Uses 💻</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold m-6 text-center">Resume</h1>
                    <span className="block text-center" id="download-button" onClick={handlePrint}>Download</span>
                    <div className="p-4">
                        <div id="cv" className="cv-container" ref={componentRef}>
                            <div className="top">
                                {/* <img src="img.jpg" width="160px" height="200px"> */}
                                <div className="title">
                                    <h1 className="text-3xl font-bold">Md. Fazley Rabbi</h1>
                                    <h3>Laravel Developer</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="content left">
                                    <div className="summary mb-1">
                                        <h3 className="font-bold">Summary</h3>
                                        A passionate self-taught web developer specializing in building web applications with more than a year of professional experience working with PHP, Laravel and MySQL
                                    </div>
                                    <div className="experience mb-1">
                                        <h3 className="font-bold">Experience</h3>
                                        <div className="mb-1">
                                            <div>
                                                <h4>Laravel&nbsp;Developer,&nbsp;Electronic&nbsp;First</h4>
                                                <small>October, 2021 - Present</small>
                                            </div>
                                            <ul>
                                                <li>- In house Software Maintenance</li>
                                                <li>- Code Refactoring, Debugging errors and Optimization </li>
                                                <li>- Custom Newsletter Feature</li>
                                                <li>- Backend Support and maintenance</li>
                                                <li>- Worked on migrating from Laravel 5.6 to 9</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div>
                                                <h4 >Laravel&nbsp;Developer&nbsp;-&nbsp;Amcoders</h4>
                                                <small>January, 2021 - July, 2021</small>
                                            </div>
                                            <ul>
                                                <li>- Payment Gateway Integration (Stripe, Paypal)</li>
                                                <li>- Two Step Authentication, Multi Auth, Email Validation</li>
                                                <li>- Multiple API Integration (Mailchimp, Twilio)</li>
                                                <li>- Dynamic CV Builder with Jquery and Ajax</li>
                                                <li>- Dynamic Kanban Layout for project management with Jquery UI</li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="education mb-1">
                                        <h3 className="font-bold">Education</h3>
                                        <h4>B.Sc.&nbsp;in&nbsp;Engineering:</h4>
                                        <div className="mb-1">
                                            <div>Department : Computer Science & Engineering </div>
                                            <div>Institute : Port City International University, Chittagong</div>
                                            <div>Passing Year : 2020</div>
                                        </div>

                                        <h4>Diploma&nbsp;in&nbsp;Engineering: </h4>
                                        <div>
                                            <div>Department : Computer Technology </div>
                                            <div>Institute : Daffodil Institute of IT, Chittagong </div>
                                            <div>Passing Year : 2016</div>
                                        </div>
                                    </div>
                                    <div className="projects mb-1">
                                        <h3 className="font-bold">Projects</h3>
                                        <div>1. <a href="https://github.com/fazleyrabby/routine-lte" target="_blank">Faculty class Routine Management System</a> (Final Year Project) [Laravel, Bootstrap, MySQL]  </div>
                                        <div>2. <a href="https://codecanyon.net/item/ebank-complete-online-banking-system-with-dps-loan/30597974" target="_blank">E-Bank</a> - Online Banking System (for AMCoders)  </div>
                                        <div>3. <a href="https://codecanyon.net/item/lenden-multipurpose-payment-gateway-system-saas/32131005" target="_blank">Lenden</a> - Multipurpose Payment Gateway System (for AMCoders) </div>
                                        <div>4. <a href="https://codecanyon.net/item/timelock-project-management-system-with-screenshot-capture/32354442" target="_blank">Timelock</a> - Project Management System </div>
                                    </div>
                                    <div className="reference mb-1">
                                        <h3 className="font-bold">Reference</h3>
                                        <div>Ashiqul Islam</div>
                                        <div>Software Engineer SSL Wireless</div>
                                        <div>Contact No: 01521401595 </div>
                                        <div>Email:ashiq201@yahoo.com</div>
                                    </div>
                                </div>
                                <div className="content right">
                                    <div className="contact mb-1">
                                        <div className="mb-1">
                                            <h4 className="font-bold">Address</h4>
                                            West High Level Road, Lalkhan Bazar, Chittagong, Bangladesh
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Phone</h4>
                                            <div>+8801954137632</div>
                                            <div>+8801872512499</div>
                                        </div>
                                    </div>
                                    <div className="personalInfo mb-1">
                                        <div className="mb-1">
                                            <h4 className="font-bold">Date&nbsp;of&nbsp;birth:</h4>
                                            26-11-1993
                                        </div>

                                        <div className="mb-1">
                                            <h4 className="font-bold">Email:</h4>
                                            fazley111@gmail.com
                                        </div>
                                    </div>
                                    <div className="links mb-1">
                                        <div className="mb-1">
                                            <h4 className="font-bold">Portfolio&nbsp;Site:</h4>
                                            <a href="https://fazleyrabbi.xyz/">https://fazleyrabbi.xyz</a>
                                        </div>

                                        <div className="mb-1">
                                            <h4 className="font-bold">LinkedIn: </h4>
                                            <a href="https://linkedin.com/in/fazley-rabby">linkedin.com/in/fazley-rabby</a>
                                        </div>
                                    </div>
                                    <div className="skill mb-1">
                                        <div className="mb-1">
                                            <h4 className="font-bold">Languages</h4>
                                            <div>
                                                1. Native Bengali
                                            </div>
                                            <div>
                                                2. Fluent in Reading, Writing & Speaking in English
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Skills</h4>
                                            <ul>
                                                <li>-Complex problem solver</li>
                                                <li>-Innovative</li>
                                                <li>-Service-focused</li>
                                                <li>-Quick Learner</li>
                                                <li>-Dedicated</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="hobbies mb-1">
                                        <h4 className="font-bold">Hobbies</h4>
                                        <div>Photography</div>
                                        <div>Travelling</div>
                                    </div>
                                    <div className="tools">
                                        <div className="mb-1">
                                            <h4 className="font-bold">Languages&nbsp;&&nbsp;Frameworks: </h4>
                                            Codeigniter, Laravel,
                                            Bootstrap, Jquery, Tailwind CSS, MySQL.
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Tools&nbsp;&&nbsp;Technology: </h4>
                                            MySQL workbench, VS Code, PHP Storm, Bash, Slack, Git, Linux OS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
}