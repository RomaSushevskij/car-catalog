"use client";

import { Layout } from "antd";
import { PropsWithChildren } from "react";

const { Content } = Layout;

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Content style={{ padding: "1rem", minHeight: "100dvh" }}>{children}</Content>
    </Layout>
  );
};
