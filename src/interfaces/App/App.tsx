import React, { useState } from "react";
import "./App.css";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";
import BadRequestModal from "../../components/badRequestModal/BadRequestModal";
import useHooks from "../../utils/hooks/useHooks";
import getData from "../../utils/api/api";

function App(): JSX.Element {
  const [url, setUrl] = useState("");
  const [badRequest, setBadRequest] = useState<boolean>(false);
  const { createItem } = useHooks();

  return (
    <div className="app">
      <Header />
      <Form
        onChange={setUrl}
        onClick={() =>
          getData(url).then((data) =>
            createItem(data).catch(() => !badRequest && setBadRequest(true))
          )
        }
      />

      {badRequest && (
        <BadRequestModal
          badRequest={badRequest}
          setBadRequest={setBadRequest}
        />
      )}
    </div>
  );
}

export default App;
