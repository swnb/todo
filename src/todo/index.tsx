import { Divider } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Row } from "../common/layout";
import { useOnPageLeave } from "../hooks/input";
import { TodoHeader } from "./header";
import { TodoItems } from "./items";
import { initItems, store } from "./store";

export function ToDo() {
  const [items, setItems] = useState<IToDoItem[]>(initItems().items);

  useEffect(() => {
    return store.subscribe(() => {
      setItems(store.getState().items);
    });
  }, []);

  const saveTodoItems = useCallback(function () {
    localStorage.setItem("todoItems", JSON.stringify(store.getState().items));
  }, []);

  useOnPageLeave(saveTodoItems);

  return (
    <>
      <Row>
        <Divider />
        <TodoHeader />
        <Divider />
      </Row>
      <Row>
        <TodoItems items={items} />
      </Row>
    </>
  );
}
