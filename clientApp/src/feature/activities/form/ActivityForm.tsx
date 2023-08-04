import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FormField, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/store/store';
import { Activity } from '../../../app/model/Activity';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { values } from 'mobx';

const ActivityForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    activityStore: {
      editMode,
      cancelEditMode,
      selectedActivity,
      updateActivity,
      createActivity,
      selectActivity,
    },
  } = useStore();
  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  });

  const validationSchema = Yup.object({
    title: Yup.string().required('The Activity Title is required'),
  });

  useEffect(() => {
    if (id) {
      if (selectedActivity && selectedActivity?.id === id) {
        selectActivity(id);
      }
    }
  }, [id]);
  useEffect(() => {
    if (selectedActivity && id) {
      setActivity(selectedActivity);
    } else {
      setActivity({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
      });
    }
  }, [selectedActivity, id]);
  const handleChange = (e: any) => {
    setActivity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.name, e.target.value);
  };
  // const handleSubmit = () => {
  //   id ? updateActivity(activity) : createActivity(activity);
  //   !editMode && navigate(-1);
  // };
  return (
    <>
      <Segment clearing>
        <Formik
          validationSchema={validationSchema}
          enableReinitialize
          initialValues={activity}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="ui form">
              <FormField>
                <Field placeholder="Title" name="title" />
                <ErrorMessage
                  name="title"
                  render={(error) => (
                    <Label basic color="red" content={error} />
                  )}
                />
              </FormField>

              <Field placeholder="Description" name="description" />
              <Field placeholder="Category" name="category" />
              <Field placeholder="Date" type="date" name="date" />
              <Field placeholder="City" name="city" />
              <Field placeholder="Venue" name="venue" />
              <Button floated="right" positive type="submit" content="Submit" />
              <Button
                floated="right"
                type="button"
                content="Cancel"
                onClick={cancelEditMode}
              />
            </Form>
          )}
        </Formik>
      </Segment>
    </>
  );
};

export default observer(ActivityForm);
