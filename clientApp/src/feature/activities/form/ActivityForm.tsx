import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/model/Activity';
interface Props {
  editActivityId: string;
  cancelEdit: any;
}
const ActivityForm = ({ cancelEdit, editActivityId }: Props) => {
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
    editActivityId &&
      axios
        .get(`http://localhost:5000/api/Activities/${editActivityId}`)
        .then((res) => setActivity(res.data));
  }, []);
  //complete this function
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" name="title" />
        <Form.TextArea placeholder="Description" name />
        <Form.Input placeholder="Category" />
        <Form.Input placeholder="Date" />
        <Form.Input placeholder="City" />
        <Form.Input placeholder="Venue" />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={cancelEdit}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
