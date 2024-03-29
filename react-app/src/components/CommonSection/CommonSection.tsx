import React from "react";
import { Container } from "reactstrap";
import "../CommonSection/commonSection.css"

interface CommonSectionProps {
    title: string;
}

const CommonSection: React.FC<CommonSectionProps> = ({ title }) => {
    return (
        <section className="common">
            <Container className="text-center">
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

export default CommonSection;
