import { Carousel, Space } from "antd";
import styles from "./ui.module.scss";

const contentStyle: React.CSSProperties = {
  height: "85svh",
  color: "#fff",
  borderRadius: "80px",
  textAlign: "center",
  background: "#6088F8",
};

export const Advertising = () => {
  return (
    <>
      <Space
        direction="vertical"
        size={48}
        style={{ width: "100%", padding: "50px", height: "100%" }}
      >
        <Carousel effect="fade" style={{ borderRadius: "80px" }} autoplay>
          <div style={{ borderRadius: "80px" }}>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div style={{ borderRadius: "80px" }}>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div style={{ borderRadius: "80px" }}>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div style={{ borderRadius: "80px" }}>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Space>
    </>
  );
};
