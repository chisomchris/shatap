import { useState } from "react";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

export const FInput = ({
  type = "text",
  name,
  formik,
  ...rest
}: {
  type: string;
  name: string;
  formik: any;
}) => {
  return (
    <div className="py-2 w-full">
      <Input {...formik.getFieldProps(name)} {...rest} />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-destructive"> {formik.errors[name]}</p>
      )}
    </div>
  );
};

export const FPasswordInput = ({
  name,
  formik,
  ...rest
}: {
  name: string;
  formik: any;
}) => {
  const [seePassword, setSeePassword] = useState(false);
  const toggleVisibility = () => {
    setSeePassword((v) => !v);
  };
  return (
    <div className="py-2">
      <div className="relative">
        <Input
          type={seePassword ? "text" : "password"}
          {...formik.getFieldProps(name)}
          {...rest}
        />
        <button
          aria-label={`${seePassword ? "Hide" : "Show"} password"`}
          type="button"
          onClick={toggleVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 "
        >
          {seePassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-destructive"> {formik.errors[name]}</p>
      )}
    </div>
  );
};
