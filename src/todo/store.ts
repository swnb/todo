import { createStore } from "redux";
import { queryUUID } from "../util/uuid";

export function initItems(): { items: IToDoItem[] } {
  const originTodoItems = localStorage.getItem("todoItems");
  if (originTodoItems) {
    return { items: JSON.parse(originTodoItems) };
  } else {
    return { items: [] };
  }
}

type Action =
  | {
      type: "delete";
      id: string;
    }
  | {
      type: "update";
      id: string;
      text: string;
    }
  | {
      type: "add";
      text: string;
    };

export function TodoItems({ items } = initItems(), action: Action) {
  switch (action.type) {
    case "add":
      return { items: [...items, { text: action.text, id: queryUUID() }] };
    case "delete":
      return { items: items.filter(({ id }) => id !== action.id) };
    case "update":
      const item = items.find(({ id }) => id === action.id);
      if (item) {
        item.text = action.text;
      }
      return { items };
  }
}

export const store = createStore(TodoItems);
