/* eslint-disable react/jsx-no-target-blank */

import Head from "next/head";
import { Container } from "../components/Container";

export default function Resume() {
    return (
        <Container title="Portfolio | Resume 💻">
            <main>
                <div className="mb-10">
                    <div className="p-4 cv-wrapper">
                        <object type="application/pdf" data="/cv.pdf"
                        width="100%"
                        height="1000px"
                        ></object>
                    </div>
                </div>
            </main>
        </Container>
    );
}