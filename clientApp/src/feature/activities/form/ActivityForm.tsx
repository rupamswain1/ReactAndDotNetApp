import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/store/store';
import { Activity } from '../../../app/model/Activity';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

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
  const handleSubmit = () => {
    id ? updateActivity(activity) : createActivity(activity);
    !editMode && navigate(-1);
  };
  return (
    <>
      <Segment clearing>
        <Form>
          <Form.Input
            placeholder="Title"
            name="title"
            value={activity.title}
            onChange={(e) => handleChange(e)}
          />
          <Form.TextArea
            placeholder="Description"
            name="description"
            value={activity.description}
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            placeholder="Date"
            type="date"
            name="date"
            value={activity.date.split('T')[0]}
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            placeholder="City"
            name="city"
            value={activity.city}
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            placeholder="Venue"
            name="venue"
            value={activity.venue}
            onChange={(e) => handleChange(e)}
          />
          <Button
            floated="right"
            positive
            type="submit"
            content="Submit"
            onClick={handleSubmit}
          />
          <Button
            floated="right"
            type="button"
            content="Cancel"
            onClick={cancelEditMode}
          />
        </Form>
      </Segment>
    </>
  );
};

export default observer(ActivityForm);
