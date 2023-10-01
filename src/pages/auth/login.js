import Logo from "@/components-page/auth/Logo";
import Layout from "@/components-core/layout";
import Button from "@/components-core/button";

const Login = () => {
  return (
    <>
      <Logo />
      <section className="flex flex-col items-center px-7 max-w-[450px] absolute bottom-0 w-full mb-40 left-2/4 translate-x-[-50%]">
        <h1 className="mb-10 text-2xl font-bold">Sign in to your Account</h1>
        <Button className="self-stretch bg-red-800 font-semibold">
          Google Login
        </Button>
      </section>
    </>
  );
};
Login.getLayout = function getLayout(page) {
  return (
    <Layout isFullScreen className="relative">
      {page}
    </Layout>
  );
};

export default Login;
