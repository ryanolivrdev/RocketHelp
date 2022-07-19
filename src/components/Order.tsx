import {
  VStack,
  HStack,
  Text,
  Box,
  useTheme,
  Circle,
  Pressable,
  IPressableProps,
} from "native-base";
import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";

export interface OrderProps {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
}

interface Props extends IPressableProps {
  data: OrderProps;
}

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();

  const StatusColor =
    data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={StatusColor} />
        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Pratrimônio {data.patrimony}
          </Text>
          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.when}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} m={5}>
          {data.status === "closed" ? (
            <CircleWavyCheck size={24} color={StatusColor} />
          ) : (
            <Hourglass size={24} color={StatusColor} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
}
