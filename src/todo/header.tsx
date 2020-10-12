import React, { useCallback } from "react";
import { Button, Input, Space } from "antd";
import { useInput } from "../hooks/input";
import { store } from "./store";

export const TodoHeader = () => {
  const [value, onChange] = useInput();

  const onPush = useCallback(() => {
    store.dispatch({ type: "add", text: value });
  }, [value]);

  return (
    <Space>
      <Input value={value} placeholder="输入" onChange={onChange} />
      <Button type="link" onClick={onPush}>
        添加
      </Button>
    </Space>
  );
};
