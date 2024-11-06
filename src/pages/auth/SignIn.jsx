import { useForm } from "react-hook-form";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import { toast } from "react-hot-toast";
import { useGlobalContext, signin } from '../../context';
import { Link, useSearchParams } from "react-router-dom";

import { userServices } from "../../utils";
import { useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";

export function SignIn() {
    const { state, dispatch } = useGlobalContext();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(false);
    const [searchParams] = useSearchParams();

    const onSubmit = async (data) => {
        const res = await userServices.signin(data);

        if (res.status === 'success') {
            const user = res.data;
            dispatch(signin(user));
            toast.success('Sign in successfully');
            localStorage.setItem('token', res.token);
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            localStorage.setItem('token', token);
            location.reload();
        }
    }, [])

    return (
        <section className="flex bg-gray-100 min-h-screen">
            <div className="w-1/3 bg-white flex flex-col rounded-lg shadow-lg h-fit
            items-center justify-center m-auto p-5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-2">
                        Sign In
                    </Typography>
                </div>
                <form className="mt-4 mb-2 mx-auto w-full">
                    <div className="mb-4 flex flex-col gap-6">
                        <Typography variant="small" color="blue-gray" className="-mb-5 font-medium">
                            Email
                        </Typography>
                        <Input {...register("email", { required: "Please enter your email" })}
                            autoFocus
                            size="md" onFocus={() => setError(false)}
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.email &&
                            <ErrorMessage mess={errors.email.message} />
                        }
                    </div>

                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="small"
                            color="blue-gray" className="-mb-5 font-medium">
                            Password
                        </Typography>
                        <Input {...register("password", { required: "Please enter your password" })}
                            type="password" onFocus={() => setError(false)}
                            size="md"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.password && <ErrorMessage mess={errors.password.message} />}

                        {error && <ErrorMessage mess="Email or password is incorrect" />}
                    </div>


                    <Button className="mt-6 text-md" fullWidth onClick={handleSubmit(onSubmit)}>
                        Sign In
                    </Button>

                    <div className="mt-6 flex justify-center">
                        <Typography variant="small" className="font-medium text-gray-900 ">
                            <a href="forgot-password">
                                Forgot Password
                            </a>
                        </Typography>
                    </div>
                    <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                        Not registered?
                        <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
                    </Typography>
                </form>

            </div>
        </section>
    );
}

export default SignIn;
