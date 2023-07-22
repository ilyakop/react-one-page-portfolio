import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  requiredChakraThemeKeys,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import CardWrapper from "./CardWrapper";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  
  const formik = useFormik({
    initialValues: {
      'firstName': "",
      'email': "",
      'type': "hireMe",
      'comment': ""
    },
    
    onSubmit: (values) => {
      submit("url?", values)
    },

    validationSchema: Yup.object({
      'firstName': Yup
        .string()
        .required('Required'),
      'email': Yup
        .string()
        .required('Required')
        .email('Invalid email address'),
      'comment': Yup
        .string()
        .min(25, 'Must be at least 25 characters')
        .required('Required')
    }),
  });

  useEffect(() => {
    if (!response) return
    onOpen(response.type, response.message)
    if (response && response.type == 'success') {
      formik.resetForm();
    }
  },[response])

  return (
    <FullScreenSection
      isDarkBackground
      py={16}
      spacing={8}
    >
      <VStack alignItems="center" w={'86vw'} gap={8}>
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <CardWrapper p="8" w={'100%'} maxW={'780px'}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>
                   {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps('type')} id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment ? (
                    <div>{formik.errors.comment}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </CardWrapper>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
