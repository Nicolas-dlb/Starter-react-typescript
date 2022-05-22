export type ItemT = {
  property: string;
  id: string;
};

interface FormProps {
  onChange: (string: string) => void;
  onClick: () => void;
}

interface useHooksT {
  items: ItemT[];
  createItem: (itemData: ItemT) => Promise<void>;
  deleteItem: (id: string) => void;
  setItems: Dispatch<SetStateAction<ItemT[]>>;
}

interface BadRequestModalProps {
  badRequest: boolean;
  setBadRequest: Dispatch<SetStateAction<boolean>>;
}
