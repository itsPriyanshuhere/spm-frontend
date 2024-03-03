import { motion, useAnimation } from "framer-motion";
import logo from "../assets/logo.png";
import heroImg from "../assets/signInPageImage.png";
import yo from "../assets/yo.png";

const SignIn = () => {
  const controls = useAnimation();

  const scrollToForm = async () => {
    await controls.start({
      y: "bottom",
      transition: { duration: 1, ease: "easeInOut" },
    });
    document
      .getElementById("signin-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 top-8 flex flex-col space-y-4"
      ></motion.div>
      <img
        src={logo}
        width={150}
        height={200}
        className="ml-10 mt-8"
        alt="logo"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-white via-white to-blue-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      ></motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-white text-4xl font-bold absolute top-24 left-1/2 transform -translate-x-1/2"
      >
        Transform Learning: <span className="">Effortless</span>{" "}
        <span className="text-blue-500">Student</span>{" "}
        <span className="text-blue-600">Management</span> Starts Here
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToForm}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold top-64 left-1/2 py-2 px-8 absolute hover:text-white border border-blue-500 hover:border-transparent rounded"
      >
        SignIn
      </motion.button>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
        src={yo}
        width={700}
        height={700}
        alt="heroImage"
        className="mt-24 ml-24"
      />
      <div id="signin-form" className="mt-[16rem] flex justify-center mb-[6rem]">
  <form className="bg-white p-32 md:p-12 lg:p-16 rounded-lg shadow-lg w-full max-w-lg">
    <h2 className="text-3xl font-semibold text-blue-500 mb-6 text-center">
      Login Here 😊
    </h2>

    <div className="mb-6">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>

    <div className="mb-6">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
    </div>
  </form>
</div>

    </div>
  );
};

export default SignIn;
