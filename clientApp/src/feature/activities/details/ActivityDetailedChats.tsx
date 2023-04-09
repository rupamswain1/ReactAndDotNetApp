import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react';

const ActivityDetailedChats = () => {
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: 'none' }}
      >
        <Header>Chat about This event</Header>
      </Segment>
      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="https://source.unsplash.com/featured/300x201" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42 PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Action>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Action>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src="https://source.unsplash.com/featured/300x201" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>
                Dude, this is awsome thankyou soo much
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
  );
};

export default observer(ActivityDetailedChats);
