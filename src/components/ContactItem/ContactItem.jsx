import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Avatar,
} from "@chakra-ui/core";

const ContactItem = ({ name, number, onDeleteContact }) => (
  <Flex
    py={2}
    px={2}
    borderRadius="md"
    bg="white.50"
    w="full"
    border="1px"
    borderColor="teal.500"
    my={1}
    justifyContent="space-between"
    alignItems="center"
  >
    <Flex>
      <Avatar mr={4} />
      <Flex flexDirection='column' alignItems='flex-start'>
        <Heading fontSize={18} color="teal.900">
          {name}
        </Heading>
        <Text>
          <a href={`tel:${number}`}> {number}</a>
        </Text>
      </Flex>
    </Flex>

    <Flex>
    <Button
      variantColor="teal" variant="outline"
      width="100px"
      type="button"
      onClick={onDeleteContact}
    >
      Edit <Icon name="edit" size="18px" ml={3} />
    </Button>

    <Button
      ml={3}
      variantColor="teal"
      width="100px"
      type="button"
      onClick={onDeleteContact}
    >
      Delete <Icon name="delete" size="18px" ml={3} />
    </Button>
    </Flex>
  </Flex>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
