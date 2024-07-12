import { Avatar, Button, Card, Col, ConfigProvider, Row, Spin } from "antd";
import React, { useState } from "react";
import EmployeeCardEmpty from "./employeeCardEmpty";
import {
  LeftCircleFilled,
  RightCircleFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import Carousel, { CarouselRef } from "antd/es/carousel";
import EmployeeCard from "./employeeCard";

function monthNumberToWord(monthNumber: number): string {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    return ("." + monthNumber);
  }

  return months[monthNumber - 1];
}

class App extends React.Component<
  {},
  { emp: []; set: number; url: string; test_data: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      test_data: {
        result: [
          {
            id: "a3e0510c-e598-4c54-aed9-593ccd09fed5",
            birth_day_month: "20 November",
            birth_year: 1991,
            birth_date: "1991-11-20",
            gender: null,
            full_name: {
              first_name: "Людмила",
              last_name: "Соясина",
              patronymic: "Викторовна",
            },
            username: "dmitry.bolgov@lab-sp.com",
            start_of_work: null,
            // avatar:
            //   "none",
            small_avatar:
              "/media-fs/attachments/96d0247a-2e12-11ef-b2a3-fedc59957173/SAP_21_окт14268-min_cropped_3430_3333.jpeg",
            medium_avatar:
              "/media-fs/attachments/975ccd08-2e12-11ef-84b4-fedc59957173/SAP_21_окт14268-min_cropped_5000_3331.jpeg",
            colleague: null,
            super_admin: false,
            external_id: null,
            is_active: true,
            residency_address: null,
            actual_address: null,
            email: "dmitry.bolgov@lab-sp.com",
            firstname_eng: "Dmitry",
            lastname_eng: "Bolgov",
            citizenship_rid: null,
            country_rid: null,
            town_birth_rid: null,
            town_live_rid: "59fcc589-00d0-4761-b5a2-f0f9577d0dd9",
            metro_station_rid: null,
            citizenship: "",
            country: "",
            town_birth: "",
            town_live: "Екатеринбург",
            metro_station: "",
            group_path: "",
            work_phone: null,
            work_mobile_phone: null,
            personal_phone: null,
            internal_phone: null,
            work_messenger: null,
            boss_id: null,
            height: null,
            eye_color: "",
            foot_size: "",
            clothes_size: "",
            position: null,
          },
          {
            id: "e95a19d3-6902-42fe-b7bc-8bef767f4313",
            birth_day_month: "20 November",
            birth_year: null,
            birth_date: "11-20",
            gender: null,
            full_name: {
              first_name: "Galina",
              last_name: "Safonova",
              patronymic: "",
            },
            username: "galina.safonova@lab-sp.com",
            start_of_work: null,
            avatar:
              "/media-fs/attachments/315a48ba-2407-11ef-83da-fedc59957173/Фото2_cropped_765_569.jpeg",
            small_avatar:
              "/media-fs/attachments/314319f6-2407-11ef-a051-fedc59957173/Фото2_cropped_601_600.jpeg",
            medium_avatar:
              "/media-fs/attachments/315a48ba-2407-11ef-83da-fedc59957173/Фото2_cropped_765_569.jpeg",
            colleague: null,
            super_admin: false,
            external_id: null,
            is_active: true,
            residency_address: null,
            actual_address: null,
            email: "galina.safonova@lab-sp.com",
            firstname_eng: "Galina",
            lastname_eng: "Safonova",
            citizenship_rid: null,
            country_rid: null,
            town_birth_rid: null,
            town_live_rid: "441297aa-6361-4615-aea0-732917b69644",
            metro_station_rid: null,
            citizenship: "",
            country: "",
            town_birth: "",
            town_live: "Санкт-Петербург",
            metro_station: "",
            group_path: "",
            work_phone: "+79213220275",
            work_mobile_phone: "+79213220275",
            personal_phone: null,
            internal_phone: null,
            work_messenger: null,
            boss_id: null,
            height: null,
            eye_color: "",
            foot_size: "",
            clothes_size: "",
            position: null,
          },
          {
            id: "92e75ddb-8c49-420a-9718-bd9594d08082",
            birth_day_month: "28 November",
            birth_year: null,
            birth_date: "11-28",
            gender: null,
            full_name: {
              first_name: "Daria",
              last_name: "Soboleva",
              patronymic: "",
            },
            username: "daria.soboleva@lab-sp.com",
            start_of_work: null,
            avatar:
              "/media-fs/attachments/361d8f5a-1cab-11ef-80cd-922c2695ce5a/Соболева_ДА_cropped_1280_907.jpeg",
            small_avatar:
              "/media-fs/attachments/3603f55e-1cab-11ef-80cd-922c2695ce5a/Соболева_ДА_cropped_973_962.jpeg",
            medium_avatar:
              "/media-fs/attachments/361d8f5a-1cab-11ef-80cd-922c2695ce5a/Соболева_ДА_cropped_1280_907.jpeg",
            colleague: null,
            super_admin: true,
            external_id: null,
            is_active: true,
            residency_address: null,
            actual_address: null,
            email: "daria.soboleva@lab-sp.com",
            firstname_eng: "Daria",
            lastname_eng: "Soboleva",
            citizenship_rid: null,
            country_rid: null,
            town_birth_rid: null,
            town_live_rid: "59fcc589-00d0-4761-b5a2-f0f9577d0dd9",
            metro_station_rid: null,
            citizenship: "",
            country: "",
            town_birth: "",
            town_live: "Екатеринбург",
            metro_station: "",
            group_path: "",
            work_phone: null,
            work_mobile_phone: null,
            personal_phone: null,
            internal_phone: null,
            work_messenger: null,
            boss_id: null,
            height: null,
            eye_color: "",
            foot_size: "",
            clothes_size: "",
            position: null,
          },
        ],
        url: "https://vk.lab-sp.com/",
      },
      emp: [],
      set: 0,
      url: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  increment() {
    this.setState({ set: this.state.set + 1 });
  }

  fetchData() {
    fetch(`/employee/birthdate`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ emp: data.result });
        this.setState({ url: data.url });
        this.increment();
      })
      .catch((err) => console.log(err));
  }

  render() {
    const carousel = React.createRef<CarouselRef>();

    // const { emp, test_data, set, url } = this.state;
    const { test_data } = this.state;
    const emp = test_data.result;
    const url = test_data.url;
    const set = 1;
    // @ts-ignore
    if (set === 0) {
      return (
        <Card
          className="h-screen w-screen items-center rounded-xl"
          style={{ borderColor: "#0193B7" }}
        >
          <Spin
            className="h-full flex place-self-center m-auto"
            indicator={<LoadingOutlined style={{ fontSize: 256 }} spin />}
          />
        </Card>
      );
    } else {
      if (emp.length === 0) {
        return (
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 0,
                fontFamily: "TT-Chocolates",
                colorBorder: "#5BF5B7",
                lineWidth: 0,
              },
              components: {
                Button: {},
                Grid: {},
                Card: {
                  lineWidth: 2,
                },
              },
            }}
          >

            <Card className="h-screen w-screen border-4 border-[#4ebb7f] rounded-2xl">
              <Row justify="space-around">
                <Col>
                  <Avatar src={"favicon.svg"} size={64} />
                </Col>
                <Col>

                  <img
                    alt=""
                    className="h-72 p-1 w-full hidden rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"

                    src={"logo512.png"}
                  />


                </Col>
              </Row>
              <Row className="py-4">
                <Col className="bg-[#4ebb7f] rounded-2xl w-full h-full text-center justify-center items-center text-xl min-h-[40px]">
                  <b>Ждем новых именинников!</b>
                </Col>
              </Row>
              <Row className="h-[100px]" justify="space-around">
                <Col className="p-1">
                  <div className="md:text-xl text-lg bg-[#4ebb7f] w-full  rounded-2xl text-center justify-center items-center"></div>
                </Col>
                <Col offset={5}>
                  <Avatar src={"Шарики.jpg"} className="right-0" size={96} />
                </Col>
              </Row>
            </Card>
          </ConfigProvider>
        );
      } else {
        return (
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 0,

                fontFamily: "TT Chocolates",
                colorBorder: "#5BF5B7",
                lineWidth: 0,
              },
              components: {
                Button: {},
                Carousel: {
                  colorBgContainer: "#5BF5B7",
                },
                Grid: {},
                Card: {},
              },
            }}
          >
            <Row>
              <Col span={1}>
                <Button
                  className="text-[#4ebb7f] h-full right-0 flex justify-center"
                  icon={<LeftCircleFilled />}
                  onClick={() => carousel.current?.prev()}
                />
              </Col>
              <Col offset={1} span={20}>
                <Carousel
                  ref={carousel}
                  dots={true}
                  autoplaySpeed={10000}
                  autoplay
                >
                  {emp.map((el: any, index: number) => (
                    <Card
                      key={index}
                      className="h-screen w-screen border-4 border-[#4ebb7f] rounded-2xl"
                    >
                      <Row className="justify-center">
                        <b className="text-3xl mt-[-13px]">С Днём Рождения!</b>
                        <Col className="bg-[#4ebb7f] rounded-sm px-3 text-center justify-center items-center ">
                          <b className="md:text-2xl text-lg">
                            {new Date(
                              Date.parse(String(el.birth_date))
                            ).getDate()}{" "}
                            {monthNumberToWord(
                              new Date(
                                Date.parse(String(el.birth_date))
                              ).getMonth()
                            )}
                          </b>{" "}
                        </Col>
                      </Row>
                      <Row className="" justify="space-around">
                        <Col>
                          {el.avatar ? (
                            <img
                              alt=""
                              className="sm:min-h-72 h-72 w-full rounded-lg object-cover shadow-xl shadow-blue-gray-900/50"
                              src={url + el.avatar}
                            />
                          ) : (
                            <img
                              alt=""
                              className="sm:min-h-72 h-48  w-full  sm:aspect-auto object- rounded-lg object-center"
                              src={"День рождения3-02.png"}
                            />
                          )}
                        </Col>
                      </Row>

                      <Row className="h-[100px]" justify="space-around">
                        <Col xs={24} sm={15} className="">
                          <div className=" text-3xl text-center justify-center items-center">
                            <b className="">
                              {el.full_name.first_name}{" "}
                            </b>
                            <b className="">
                              {el.full_name.last_name}{" "}
                            </b>
                            <b className="">
                              {el.full_name.patronymic}
                            </b>{" "}
                          </div>
                        </Col>
                        <Col>
                          {/* <img
                            alt=""
                            className=" p-1 mx-auto w-4/6 aspect-square sm:aspect-auto object-fit rounded-lg object-center "
                            src={"Шарики.jpg"}
                          /> */}
                          <Button  className="outline outline-1 text-xl rounded-lg text-center py-0 ">Поздравить!</Button>
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </Carousel>
              </Col>
              <Col className=" " span={1}>
                <Button
                  className=" h-full text-[#4ebb7f] "
                  icon={<RightCircleFilled />}
                  onClick={() => carousel.current?.next()}
                />
              </Col>
            </Row>
          </ConfigProvider>

        );
      }
    }
  }
}

export default App;
