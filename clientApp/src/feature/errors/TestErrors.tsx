import axios from 'axios';
import React from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';

export const TestErrors = () => {
  const baseuUrl = 'http://localhost:5000/api/';

  function handleNotFound() {
    axios
      .get(baseuUrl + 'buggy/not-found')
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseuUrl + 'buggy/bad-request')
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseuUrl + 'buggy/server-error')
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseuUrl + 'buggy/unauthorised')
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios
      .get(baseuUrl + 'activities/notaguid')
      .catch((err) => console.log(err.response));
  }
  function handleValidationError() {
    axios
      .post(baseuUrl + 'activities', {})
      .catch((err) => console.log(err.response));
  }
  return (
    <>
      <Header as="h1" content="Test Error Component" />
      <Segment>
        <Button.Group widths="7">
          <Button onClick={handleNotFound} content="Not Found" basic primary />
          <Button
            onClick={handleBadRequest}
            content="Bad Request"
            basic
            primary
          />
          <Button
            onClick={handleValidationError}
            content="Validation Error"
            basic
            primary
          />
          <Button
            onClick={handleServerError}
            content="Server Error"
            basic
            primary
          />
          <Button
            onClick={handleUnauthorised}
            content="unauthorised"
            basic
            primary
          />
          <Button onClick={handleBadGuid} content="Bad Guid" basic primary />
        </Button.Group>
      </Segment>
    </>
  );
};
