import { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../hooks/redux/hooks";
import { clearError, selectError } from "../../store/cities/citiesSlice";
import "./Error.css";

const Error = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      setShowError(true);
      setErrorMessage(error);
    }
  }, [error]);

  let classes: string;
  if (!showError) {
    classes = "error error-default error-display-false";
  } else {
    classes = "error error-default";
  }

  return (
    <div className={classes} data-testid="error">
      <div className="error-message">{errorMessage}</div>
      <div className="error-close">
        <BsXLg
          onClick={() => {
            dispatch(clearError());
            setShowError(!setShowError);
          }}
          className="error-icon"
        />
      </div>
    </div>
  );
};

export default Error;
