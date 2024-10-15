import { isVisible } from "@testing-library/user-event/dist/utils";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/hooks";
import rfpReducer from "./../redux/reducer";
import {
  selectRfpData,
  selectRfpError,
  selectRfpLoading,
} from "../redux/selector";
import {
  fetchAnswerFailed,
  fetchAnswerStart,
  fetchAnswerSuccess,
} from "../redux/actions";
import { fetchHandler } from "../redux/apiFetch";

const MockAI = ({ setIsVisible, isVisible }) => {
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(selectRfpData);
  const loading = useSelector(selectRfpLoading);
  const error = useSelector(selectRfpError);

  const hanldeSubmit = async () => {
    console.log(question);
    dispatch({ type: fetchAnswerStart });
    try {
      const { data } = await fetchHandler();
      console.log(data);
      dispatch({ type: fetchAnswerSuccess, payload: data });
    } catch (error) {
      dispatch({ type: fetchAnswerFailed, error });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
      {
        <div style={{ border: "5px solid red" }}>
          <Form>
            <Button onClick={handleClose} color="danger" variant="text">
              close
            </Button>
            <Input
              placeholder="enter ..."
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button onClick={hanldeSubmit} type="primary">
              Submit
            </Button>
          </Form>
        </div>
      }
      {data && (
        <div>
          <ul>
            {data?.map((item) => (
              <div key={item.id}>
                <li>{item.question}</li>
                <li>{item.answer}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MockAI;
