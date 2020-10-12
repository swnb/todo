import React, { PropsWithChildren } from "react";
import { Row as CustomRow, Col } from "antd";

export function Row({ children }: PropsWithChildren<{}>) {
  return (
    <CustomRow justify="center">
      <Col>{children}</Col>
    </CustomRow>
  );
}
