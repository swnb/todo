import { Space, Input, Button } from "antd";
import React, { useCallback, useEffect } from "react";
import { useInput } from "../hooks/input";
import { store } from "./store";

interface TodoItemProps {
  text: string;
  id: string;
}
function TodoItem({ text, id }: TodoItemProps) {
  const [value, onChange] = useInput(text);

  useEffect(() => {
    store.dispatch({ type: "update", text: value, id });
  }, [id, value]);

  const onDelete = useCallback(
    function () {
      store.dispatch({ type: "delete", id });
    },
    [id]
  );

  return (
    <Space>
      <Input value={value} placeholder="输入" onChange={onChange} />
      <Button type="link" onClick={onDelete}>
        删除
      </Button>
    </Space>
  );
}

interface TodoItemsProps {
  items: IToDoItem[];
}
export function TodoItems({ items }: TodoItemsProps) {
  return (
    <Space direction="vertical">
      {items.map(({ id, text }) => (
        <Space key={id}>
          <span>{id}. </span>
          <TodoItem text={text} id={id} />
        </Space>
      ))}
    </Space>
  );
}
