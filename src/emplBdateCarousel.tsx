import {

    LeftCircleFilled,

    RightCircleFilled,

} from "@ant-design/icons";
import React from "react";
import {
    Button,
    Carousel,
    Col,
    Row,
} from "antd";
import { CarouselRef } from "antd/es/carousel";
import EmployeeCard from "./employeeCard";
import PropTypes, {InferProps} from "prop-types";


function EmplBdateCarousel({employees}: InferProps<typeof EmplBdateCarousel.propTypes>) {
    
    return (
        <></>
    );
}

EmplBdateCarousel.propTypes = {
    employees: PropTypes.any,
};

export default EmplBdateCarousel;
