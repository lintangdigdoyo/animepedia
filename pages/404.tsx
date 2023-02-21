import { useRouter } from "next/router";

import style from "styles/components/NotFound.module.scss";
import Button from "components/Common/Button";

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={style.notFound}>
      <h1 className={style.notFound__heading}>404 | Page Not Found</h1>
      <p className={style.notFound__text}>
        We&lsquo;re sorry, the page you were looking for{" "}
        <strong>cannot be found</strong>. It may have been removed, renamed, or
        is temporarily unavailable. You can navigate to the homepage using
        button down below.
      </p>
      <Button onClick={handleClick}>Back to Home Page</Button>
    </div>
  );
};

export default NotFound;
