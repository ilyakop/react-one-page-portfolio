import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import CardWrapper from "./CardWrapper";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { ref, style } = useScrollFadeIn();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },

    onSubmit: (values) => {
      submit("url?", values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  useEffect(() => {
    if (!response) return;
    onOpen(response.type, response.message);
    if (response && response.type === "success") {
      formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection id="contact-section" py={16} justifyContent="center">
      <VStack ref={ref} style={style} alignItems="center" w="86vw" gap={6}>
        <Heading as="h2" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }}>
          Contact
        </Heading>
        <Text color="brand.muted" textAlign="center">
          Have a project in mind? Send me a message.
        </Text>
        <CardWrapper p="8" w="100%" maxW="780px">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" name="email" type="email" {...formik.getFieldProps("email")} />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea id="comment" name="comment" height={150} {...formik.getFieldProps("comment")} />
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment ? <div>{formik.errors.comment}</div> : null}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                bg="brand.accent"
                color="black"
                _hover={{ bg: "brand.accent2" }}
                width="full"
                isLoading={isLoading}
                fontFamily="mono"
                fontSize="sm"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </CardWrapper>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
