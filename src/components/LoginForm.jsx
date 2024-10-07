import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const history = useHistory();

  function submitFn(data) {
    axios
      .post("https://reqres.in/api/users", data)
      .then((response) => {
        reset();
        toast.success(`${response.data.id} id'li kullanıcımız hoş geldiniz.`);
        console.log(response.data);
        history.push("/feed");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <i className="fa-brands fa-twitter text-blue-400 text-5xl"></i>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900  dark:text-slate-50">
            Sign in to twitter
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(submitFn)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="none"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email alanı gereklidir",
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {errors.email && (
              <p className="text-red-500 bg-red-200 rounded-md p-4">
                {errors.email.message}
              </p>
            )}

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "En az 8 karakter giriniz.",
                    },
                    maxLength: {
                      value: 12,
                      message: "En fazla 12 karakter giriniz.",
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 bg-red-200 rounded-md p-4">
                {errors.password.message}
              </p>
            )}
            <div>
              <button
                disabled={!isValid}
                type="submit"
                className="flex w-full justify-center rounded-full bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
