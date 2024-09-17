import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'tailwindcss/tailwind.css';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    title: Yup.string()
        .max(50, 'Title must be 50 characters or less'),
    images: Yup.string()
        .url('Invalid URL format'),
    content: Yup.string()
        .min(20, 'Content must be at least 20 characters'),
}).test(
    'at-least-one',
    'At least one of these fields must be filled: title, images, content.',
    function (values) {
        const { title, images, content } = values;
        return !!(title || images || content);
    }
)

const NewPostForm = () => {
    const [postSaved, setPostSaved] = useState(false)
    const [saveError, setSaveError] = useState(null)
    // Define initial form values
    const initialValues = {
        title: '',
        images: '',
        content: '',
    };

  // Handle form submission
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const newValues = {...values, values:[values.images]}
  }

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">Create a New Post</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                  URL
                </label>
                <Field
                  name="images"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="url" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <Field
                  name="content"
                  as="textarea"
                  className="mt-1 block w-full h-[200px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="content" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewPostForm;
