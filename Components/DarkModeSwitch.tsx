import { useColorMode, Switch, HStack, Icon } from "@chakra-ui/react";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
export const DarkModeSwitch: React.FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack spacing="8">
      {colorMode === "light" ? (
        <Icon color="white" fontSize="20px" as={BsFillSunFill} />
      ) : (
        <Icon color="white" fontSize="20px" as={FaMoon} />
      )}
      <Switch
        right="1rem"
        colorScheme="orange"
        isChecked={isDark}
        {...props}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};
