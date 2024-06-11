import { Button, Col, ConfigProvider, Row, Spin } from "antd";
import React, { useState } from "react";
import EmployeeCardEmpty from "./employeeCardEmpty";
import {
  LeftCircleFilled,
  RightCircleFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import Carousel, { CarouselRef } from "antd/es/carousel";
import EmployeeCard from "./employeeCard";

class App extends React.Component<{}, { emp: []; set: number; url: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      emp: [],
      set: 0,
      url: ""
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
        console.log(data);
        this.increment();
      })
      .catch((err) => console.log(err));
  }

  render() {
    const carousel = React.createRef<CarouselRef>();

    const { emp, set, url } = this.state;

    if (set === 0) {
      return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      );
    } else {
      if (emp.length === 0) {
        return (
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b",
                borderRadius: 0,
                colorBgBase: "#001E37",
                colorTextBase: "#5BF5B7",
                fontFamily: "Neue Machina",
                colorBorder: "#000000",
                lineWidth: 0,
              },
              components: {
                Button: {},
                Grid: {},
              },
            }}
          >
            <div className="grid grid-cols-1  bg-[#001E37]">
              <div className="col-span-1 justify-center m-auto">
                <img
                  alt="employee"
                  width={100}
                  height={100}
                  src={"logo512.png"}
                />
              </div>
              <div className="md:col-span-2 col-span-1 bg-[url('bg.svg')] bg-cover bg-no-repeat bg-center">
                <div className="text-xl text-white font-bold text-center">
                  Сегодня нет именинников
                </div>
                <img
                  src="День Рождения v3.png"
                  height={80}
                  width={80}
                  className="m-auto mt-auto rounded-full aspect-auto"
                  alt=""
                />
              </div>
            </div>
          </ConfigProvider>
        );
      } else {
        return (
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b",
                borderRadius: 0,
                colorBgBase: "#001E37",
                colorTextBase: "#5BF5B7",
                fontFamily: "Neue Machina",
                colorBorder: "#000000",
                lineWidth: 0,
              },
              components: {
                Button: {},
                Grid: {},
              },
            }}
          >
            <Row gutter={[0, 0]}>
              <Col className="bg-[#001E37] " flex="none" span={4}>
                <Button
                  type="default"
                  className="h-full w-full flex-none"
                  icon={<LeftCircleFilled />}
                  onClick={() => carousel.current?.prev()}
                />
              </Col>

              <Col flex="none" span={12}>
                <Carousel ref={carousel} dots={false}>
                  {emp &&
                    emp.map((el: any, index: number) => (
                      <div
                        key={index}
                        className="grid  md:grid-cols-3 grid-cols-1  bg-[#001E37]"
                      >
                        <div className="p-4 pl-[-2] first-letter:min-h-[600px] min-w-[600px]  max-h-[600px] max-w-[600px]">
                          <div className="relative min-h-[300px] col-span-1 justify-center m-auto ">
                            <img
                              alt="employee"
                              className="object-cover"
                              width={200}
                              height={200}
                              src={
                                el.avatar
                                  ? url + el.avatar
                                  : "logo512.png"
                              }
                            />
                          </div>
                          <div className="md:col-span-2 col-span-1 h-full bg-[url('bg.svg')] bg-cover bg-no-repeat bg-center">
                            <div className="text-xl">
                              <b>Поздравляем с днем рождения!</b>
                              {""}
                              <br />
                              <br />{" "}
                              <b className="text-2xl">
                                {el.full_name.first_name}
                              </b>
                              <br />{" "}
                              <b className="text-2xl">
                                {el.full_name.last_name}
                              </b>
                              <br />{" "}
                              <b className="text-2xl">
                                {el.full_name.patronymic}
                              </b>
                              <br />{" "}
                              <b className="text-2xl">
                                {new Date(
                                  Date.parse(String(el.birth_date))
                                ).getDate()}
                                {"."}
                                {new Date(
                                  Date.parse(String(el.birth_date))
                                ).getMonth() + 1}
                              </b>{" "}
                              {/* //! Опасное место!!! */}
                            </div>
                            <img
                              src="День Рождения v3.png"
                              height={80}
                              width={80}
                              className="m-auto mt-auto rounded-full aspect-auto"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </Carousel>
              </Col>
              <Col className="bg-[#001E37] " flex="none" span={4}>
                <Button
                  className=" h-full "
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
