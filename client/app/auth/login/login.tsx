"use client";
import Link from "next/link";
import { FormikValues, useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/toggle";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { LoaderCircle } from "lucide-react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { Wrapper } from "@/components/ui/wrapper";
import { FInput, FPasswordInput } from "@/components/input-with-formik";

export const Login = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("redirect_uri") || "/";

  const onSubmit = async (values: FormikValues) => {
    try {
      setLoading(true);
      const { email, password } = values;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
      });
      if (!response?.ok || response.error) {
        return setError("Invalid email or password");
      }
      if (!response?.error) {
        router.push(callbackUrl);
      }
    } catch (error) {
      setError("An error occured");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: toFormikValidationSchema(
      z.object({
        email: z
          .string({ required_error: "email is required" })
          .trim()
          .email("Invalid email address"),
        password: z
          .string({
            required_error: "password is required",
          })
          .min(4, "at least 4 characters"),
      })
    ),
    onSubmit,
  });

  return (
    <div className="min-h-screen py-16 ">
      <Wrapper className="wrapper grid place-items-center">
        <div className="max-w-xl bg-primary-foreground/50 p-8 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-[4px_4px_rgba(44,_50,_233,_0.4),_8px_8px_rgba(44,_233,_50,_0.3),_12px_12px_rgba(233,_107,_44,_0.2),_16px_16px_rgba(0,_98,_90,_0.1),_20px_20px_rgba(0,_98,_90,_0.05)]">
          <div className="flex items-center justify-between">
            <Logo />
            <ModeToggle />
          </div>
          <p className="py-6">Login now</p>
          <form
            onSubmit={formik.handleSubmit}
            onChange={(e) => {
              if (error) {
                setError("");
              }
            }}
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <FInput name="email" type={"email"} formik={formik} />
            <FPasswordInput name="password" formik={formik} />
            <p className="pt-6 pb-4">
              <Link href="/auth/forgot-password">Forgot passwrod</Link>
            </p>
            {error && <p className="text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Login"}
            </Button>
          </form>
          <p className="pt-6 pb-4">
            New to ShatApp?{" "}
            <Link href="/register" className="ml-2">
              Create an account
            </Link>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
