import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Seaech Games..."
          variant={"outline"}
          bg="input.bg"
          borderColor="input.border"
          _placeholder={{ color: "input.placeholder" }}
          _hover={{ borderColor: "input.border" }}
          _focus={{ borderColor: "input.border", boxShadow: "none" }}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
