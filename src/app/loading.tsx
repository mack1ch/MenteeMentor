"use client";
import { ConfigProvider, Flex, Spin } from "antd";
import React from "react";

export default function Loading() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Spin: {
              colorPrimary: "#4876f7",
            },
          },
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100svh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex align="center" gap="middle">
            <Spin size="large" />
          </Flex>
        </div>
      </ConfigProvider>
    </>
  );
}
