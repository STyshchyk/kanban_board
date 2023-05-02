import React from 'react';
import './App.scss';
import {Button, Stack} from "react-bootstrap";
import {useGetPullRequestsQuery} from "./Api/IssueApi";

function App() {
  const {data =[], isLoading, isError} = useGetPullRequestsQuery("https://api.github.com/repos/facebook/react/pulls")
  if (!isLoading) console.log(data)
  return (
    <div className="App">
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </div>
  );
}

export default App;
