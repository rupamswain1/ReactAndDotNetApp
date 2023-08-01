import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/store/store';
import { Container, Header, Segment } from 'semantic-ui-react';
const ServerError = () => {
  const { commonStore } = useStore();
  return (
    <Container>
      <Header as="h1" content="Server Error" />
      <Header sub as="h5" color="red" content={commonStore.error?.message} />
      {commonStore.error?.details && (
        <Segment>
          <Header as="h4" content="stack trace" color="teal" />
          <code style={{ marginTop: '10px' }}>{commonStore.error.details}</code>
        </Segment>
      )}
    </Container>
  );
};

export default observer(ServerError);
