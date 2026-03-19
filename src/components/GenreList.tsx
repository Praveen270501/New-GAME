import useData from "@/hooks/useData";
import useGenre, { Genre } from "@/hooks/UseGenre";
import getCroppedImageURL from "@/services/iamge-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSeleectGenre: (genre: Genre) => void;
  selcetedGenre: Genre | null;
}

const GenreList = ({ selcetedGenre, onSeleectGenre }: Props) => {
  const { data, isLoading, errorMsg } = useGenre();
  if (errorMsg) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant={"plain"}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selcetedGenre?.id ? "bold" : "normal"}
                onClick={() => onSeleectGenre(genre)}
                variant="ghost"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
