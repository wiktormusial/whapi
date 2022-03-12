import { useEffect, useState, useRef } from "react";
import { BsXLg } from "react-icons/bs";
import { gsap } from "gsap";
import { useAppSelector, useAppDispatch } from "../../hooks/redux/hooks";
import { clearError, selectError } from "../../store/cities/citiesSlice";
import "./Error.css";

const Error = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const messRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) {
      setShowError(true);
      setErrorMessage(error);
      const animation = async () => {
        await gsap.to(messRef.current, { x: 10 }).duration(0.2);
        await gsap.to(messRef.current, { x: -20 }).duration(0.2);
        await gsap.to(messRef.current, { x: 0 }).duration(0.2);
      };
      animation();
    }
  }, [error]);

  let classes: string;
  if (!showError) {
    classes = "error error-default error-display-false";
  } else {
    classes = "error error-default";
  }

  return (
    <div className={classes} data-testid="error" ref={messRef}>
      <div className="error-message">{errorMessage}</div>
      <div className="error-close">
        <BsXLg
          onClick={async () => {
            dispatch(clearError());
            await gsap.to(messRef.current, { opacity: 0 }).duration(0.5);
            messRef.current!.style.opacity = "100%";
            setShowError(!setShowError);
          }}
          className="error-icon"
        />
      </div>
    </div>
  );
};

export default Error;
